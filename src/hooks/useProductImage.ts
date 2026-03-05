import { useState, useEffect } from 'react';
import ProductImagePreloader from '../services/productImagePreloader';

interface UseProductImageResult {
    imageUrl: string | null;
    loading: boolean;
}

export default function useProductImage(productId: string): UseProductImageResult {
    const preloader = ProductImagePreloader.getInstance();
    const cached = productId ? preloader.getPreloadedImages(productId) : null;

    const [imageUrl, setImageUrl] = useState<string | null>(
        cached && cached.length > 0 ? cached[0] : null
    );
    const [loading, setLoading] = useState(!cached || cached.length === 0);

    useEffect(() => {
        if (!productId) {
            setLoading(false);
            return;
        }

        // Already have an image from cache (including sessionStorage)
        const current = preloader.getPreloadedImages(productId);
        if (current && current.length > 0) {
            setImageUrl(current[0]);
            setLoading(false);
            return;
        }

        let cancelled = false;

        preloader.preloadProductImages([productId]).then(() => {
            if (cancelled) return;
            const images = preloader.getPreloadedImages(productId);
            if (images && images.length > 0) {
                setImageUrl(images[0]);
            }
            setLoading(false);
        });

        return () => {
            cancelled = true;
        };
    }, [productId]);

    return { imageUrl, loading };
}
