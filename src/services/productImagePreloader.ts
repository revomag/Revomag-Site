const SHOPIFY_DOMAIN = '99d84c-f3.myshopify.com';
const STOREFRONT_ACCESS_TOKEN = 'b203cc343fe629d92d6022d0a7551415';
const STOREFRONT_API_URL = `https://${SHOPIFY_DOMAIN}/api/2025-01/graphql`;
const STORAGE_KEY = 'revomag_product_images';

class ProductImagePreloader {
    private static instance: ProductImagePreloader;
    private imageCache = new Map<string, string[]>();
    private fetchPromises = new Map<string, Promise<string[]>>();

    private constructor() {
        this.restoreFromStorage();
    }

    static getInstance(): ProductImagePreloader {
        if (!ProductImagePreloader.instance) {
            ProductImagePreloader.instance = new ProductImagePreloader();
        }
        return ProductImagePreloader.instance;
    }

    async preloadProductImages(productIds: string[]): Promise<void> {
        await Promise.all(productIds.map((id) => this.ensureProduct(id)));
    }

    getPreloadedImages(productId: string): string[] | null {
        return this.imageCache.get(productId) || null;
    }

    private async ensureProduct(productId: string): Promise<string[]> {
        const cached = this.imageCache.get(productId);
        if (cached) return cached;

        const existing = this.fetchPromises.get(productId);
        if (existing) return existing;

        const promise = this.fetchAndCache(productId);
        this.fetchPromises.set(productId, promise);

        try {
            return await promise;
        } finally {
            this.fetchPromises.delete(productId);
        }
    }

    private async fetchAndCache(productId: string): Promise<string[]> {
        try {
            const imageUrls = await this.fetchProductImages(productId);
            if (imageUrls.length > 0) {
                this.imageCache.set(productId, imageUrls);
                this.persistToStorage();
                await this.preloadImagesInBrowser(imageUrls);
                console.log(`Preloaded ${imageUrls.length} images for product ${productId}`);
            }
            return imageUrls;
        } catch (error) {
            console.warn(`Failed to preload images for product ${productId}:`, error);
            return [];
        }
    }

    private async fetchProductImages(productId: string): Promise<string[]> {
        const gid = `gid://shopify/Product/${productId}`;
        const query = `{
            node(id: "${gid}") {
                ... on Product {
                    images(first: 20) {
                        edges {
                            node {
                                src
                            }
                        }
                    }
                }
            }
        }`;

        const response = await fetch(STOREFRONT_API_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'X-Shopify-Storefront-Access-Token': STOREFRONT_ACCESS_TOKEN,
            },
            body: JSON.stringify({ query }),
        });

        if (!response.ok) {
            throw new Error(`Storefront API returned ${response.status}`);
        }

        const data = await response.json();
        const edges = data?.data?.node?.images?.edges || [];

        return edges
            .map((edge: any) => edge.node?.src)
            .filter((url: string) => url && url.startsWith('http'))
            .map((url: string) => {
                if (url.includes('_100x100')) {
                    return url.replace('_100x100', '_1000x1500');
                }
                return url;
            });
    }

    private restoreFromStorage(): void {
        try {
            const stored = sessionStorage.getItem(STORAGE_KEY);
            if (stored) {
                const parsed = JSON.parse(stored);
                for (const [id, urls] of Object.entries(parsed)) {
                    if (Array.isArray(urls) && urls.length > 0) {
                        this.imageCache.set(id, urls as string[]);
                    }
                }
            }
        } catch {
            // sessionStorage unavailable or corrupt — start fresh
        }
    }

    private persistToStorage(): void {
        try {
            const obj: Record<string, string[]> = {};
            this.imageCache.forEach((urls, id) => {
                obj[id] = urls;
            });
            sessionStorage.setItem(STORAGE_KEY, JSON.stringify(obj));
        } catch {
            // sessionStorage full or unavailable
        }
    }

    private async preloadImagesInBrowser(imageUrls: string[]): Promise<void> {
        const imagePromises = imageUrls.map((url) => {
            return new Promise<void>((resolve) => {
                const img = new Image();
                img.onload = () => resolve();
                img.onerror = () => resolve();
                img.src = url;
            });
        });

        await Promise.all(imagePromises);
    }
}

export default ProductImagePreloader;
