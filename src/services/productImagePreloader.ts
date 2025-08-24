declare global {
    interface Window {
        ShopifyBuy: any;
    }
}

class ProductImagePreloader {
    private static instance: ProductImagePreloader;
    private imageCache = new Map<string, string[]>();
    private isPreloading = false;

    static getInstance(): ProductImagePreloader {
        if (!ProductImagePreloader.instance) {
            ProductImagePreloader.instance = new ProductImagePreloader();
        }
        return ProductImagePreloader.instance;
    }

    async preloadProductImages(productIds: string[]): Promise<void> {
        if (this.isPreloading) return;
        this.isPreloading = true;

        try {
            // Wait for ShopifyBuy to be available
            await this.waitForShopifyBuy();

            const client = window.ShopifyBuy.buildClient({
                domain: '99d84c-f3.myshopify.com',
                storefrontAccessToken: 'b203cc343fe629d92d6022d0a7551415',
            });

            // Fetch all products in parallel
            const productPromises = productIds.map(async (productId) => {
                try {
                    const product = await client.product.fetch(productId);
                    if (product && product.images) {
                        const imageUrls = product.images
                            .map((img: any) => img.src)
                            .filter((url: string) => 
                                url && url.startsWith('http') && 
                                !url.includes('‹') && 
                                !url.includes('›')
                            );
                        
                        // Convert thumbnails to high-res versions
                        const highResUrls = imageUrls.map((url: string) => {
                            if (url.includes('_100x100')) {
                                return url.replace('_100x100', '_1000x1500');
                            }
                            return url;
                        });

                        this.imageCache.set(productId, highResUrls);
                        
                        // Preload the images in the browser cache
                        await this.preloadImages(highResUrls);
                        
                        console.log(`Preloaded ${highResUrls.length} images for product ${productId}`);
                    }
                } catch (error) {
                    console.warn(`Failed to preload images for product ${productId}:`, error);
                }
            });

            await Promise.all(productPromises);
        } catch (error) {
            console.warn('Failed to preload product images:', error);
        } finally {
            this.isPreloading = false;
        }
    }

    getPreloadedImages(productId: string): string[] | null {
        return this.imageCache.get(productId) || null;
    }

    private async waitForShopifyBuy(): Promise<void> {
        return new Promise((resolve) => {
            if (window.ShopifyBuy && window.ShopifyBuy.buildClient) {
                resolve();
                return;
            }

            // Load ShopifyBuy if not already loaded
            if (!document.querySelector('script[src*="buy-button-storefront"]')) {
                const script = document.createElement('script');
                script.src = 'https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js';
                script.async = true;
                script.onload = () => resolve();
                document.head.appendChild(script);
            } else {
                // Script exists, wait for it to load
                const checkInterval = setInterval(() => {
                    if (window.ShopifyBuy && window.ShopifyBuy.buildClient) {
                        clearInterval(checkInterval);
                        resolve();
                    }
                }, 100);
            }
        });
    }

    private async preloadImages(imageUrls: string[]): Promise<void> {
        const imagePromises = imageUrls.map((url) => {
            return new Promise<void>((resolve) => {
                const img = new Image();
                img.onload = () => resolve();
                img.onerror = () => resolve(); // Continue even if an image fails
                img.src = url;
            });
        });

        await Promise.all(imagePromises);
    }
}

export default ProductImagePreloader;