import React, { useEffect, useRef, useState } from 'react';
import './shopifyProductDisplay.scss';
import ProductImagePreloader from '../../services/productImagePreloader';

declare global {
    interface Window {
        ShopifyBuy: any;
    }
}

interface ShopifyProductDisplayProps {
    productId: string;
    showDescription?: boolean;
    showImages?: boolean;
    componentId?: string;
}

const ShopifyProductDisplay: React.FC<ShopifyProductDisplayProps> = ({ 
    productId, 
    showDescription = true,
    showImages = true,
    componentId
}) => {
    const shopifyInitialized = useRef(false);
    const componentRef = useRef<any>(null);
    const clientRef = useRef<any>(null);
    const productImagesRef = useRef<string[]>([]);
    const uniqueId = componentId || `product-component-${productId}-${Date.now()}`;
    const [modalImage, setModalImage] = useState<string | null>(null);
    const [productImages, setProductImages] = useState<string[]>([]);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    
    // Update ref whenever state changes
    useEffect(() => {
        productImagesRef.current = productImages;
    }, [productImages, productId]);

    useEffect(() => {
        const ShopifyBuyInit = () => {
            // Check for preloaded images first, or trigger preload
            const preloader = ProductImagePreloader.getInstance();
            const preloadedImages = preloader.getPreloadedImages(productId);

            if (preloadedImages && preloadedImages.length > 0) {
                setProductImages(preloadedImages);
                console.log(`Using ${preloadedImages.length} preloaded images for product ${productId}`);
            } else {
                // Preload images and update state when ready
                preloader.preloadProductImages([productId]).then(() => {
                    const images = preloader.getPreloadedImages(productId);
                    if (images && images.length > 0) {
                        setProductImages(images);
                        console.log(`Loaded ${images.length} images for product ${productId}`);
                    }
                });
            }

            const client = window.ShopifyBuy.buildClient({
                domain: '99d84c-f3.myshopify.com',
                storefrontAccessToken: 'b203cc343fe629d92d6022d0a7551415',
            });

            clientRef.current = client;

            window.ShopifyBuy.UI.onReady(client).then((ui: any) => {
                componentRef.current = ui.createComponent('product', {
                    id: productId,
                    node: document.getElementById(uniqueId)!,
                    moneyFormat: '%24%7B%7Bamount%7D%7D',
                    options: {
                        product: {
                            styles: {
                                product: {
                                    '@media (min-width: 601px)': {
                                        'max-width': '100%',
                                        'margin-left': '0',
                                        'margin-bottom': '50px',
                                    },
                                    'text-align': 'center',
                                },
                                title: { 
                                    'font-size': '26px',
                                    'display': 'inline-block',
                                    'margin-right': '15px'
                                },
                                button: {
                                    'border-radius': '9px',
                                    'background': '#FE6A09',
                                    'width': '100%',
                                    'margin-top': '10px',
                                    ':hover': {
                                        'background-color': '#556B2F !important',
                                        'opacity': '1 !important'
                                    }
                                },
                                price: { 
                                    'font-size': '18px',
                                    'display': 'inline-block',
                                    'margin-bottom': '10px'
                                },
                                compareAt: { 'font-size': '15.3px' },
                                unitPrice: { 'font-size': '15.3px' },
                            },
                            layout: 'vertical',
                            contents: {
                                img: false,
                                imgWithCarousel: false,
                                description: showDescription,
                                title: true,
                                price: true,
                            },
                            width: '100%',
                            text: { button: 'Add to cart' },
                        },
                        modalProduct: {
                            styles: {
                                product: {
                                    '@media (min-width: 601px)': {
                                        'max-width': '100%',
                                        'margin-left': '0px',
                                        'margin-bottom': '0px',
                                    },
                                },
                                button: {
                                    'border-radius': '9px',
                                    'background': '#FE6A09',
                                    ':hover': {
                                        'background-color': '#556B2F !important',
                                        'opacity': '1 !important'
                                    }
                                },
                            },
                            contents: {
                                img: false,
                                imgWithCarousel: true,
                                button: false,
                                buttonWithQuantity: true,
                            },
                            text: {
                                button: 'Add to cart',
                            },
                        },
                        cart: {
                            styles: {
                                button: { 'border-radius': '9px' },
                            },
                            text: {
                                title: 'Shopping Cart',
                                total: 'Subtotal',
                                button: 'Checkout',
                            },
                            popup: false,
                        },
                    },
                });

                // Force-hide any images the SDK renders despite imgWithCarousel: false
                if (showImages) {
                    const hideSDKImages = () => {
                        const container = document.getElementById(uniqueId);
                        if (container) {
                            const iframes = container.querySelectorAll('iframe');
                            iframes.forEach(iframe => {
                                try {
                                    const doc = iframe.contentDocument || iframe.contentWindow?.document;
                                    if (doc) {
                                        const hasImages = doc.querySelector('img, .shopify-buy__carousel, .shopify-buy__product-img-wrapper');
                                        if (hasImages) {
                                            (iframe as HTMLElement).style.display = 'none';
                                        }
                                    }
                                } catch (e) {
                                    // Cross-origin iframe, skip
                                }
                            });
                        }
                    };
                    setTimeout(hideSDKImages, 1000);
                    setTimeout(hideSDKImages, 2500);
                    setTimeout(hideSDKImages, 5000);
                }
            });
        };

        if (!shopifyInitialized.current) {
            if (!window.ShopifyBuy) {
                const script = document.createElement('script');
                script.src = 'https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js';
                script.async = true;
                script.onload = ShopifyBuyInit;
                document.body.appendChild(script);
            } else if (window.ShopifyBuy.UI) {
                ShopifyBuyInit();
            }
            shopifyInitialized.current = true;
        }
    }, [productId, showDescription, showImages, uniqueId]);

    const handlePrevImage = () => {
        const newIndex = currentImageIndex === 0 ? productImages.length - 1 : currentImageIndex - 1;
        setCurrentImageIndex(newIndex);
        setModalImage(productImages[newIndex]);
    };

    const handleNextImage = () => {
        const newIndex = currentImageIndex === productImages.length - 1 ? 0 : currentImageIndex + 1;
        setCurrentImageIndex(newIndex);
        setModalImage(productImages[newIndex]);
    };

    return (
        <>
            {showImages && productImages.length > 0 && (
                <div className="product-image-gallery">
                    <div className="gallery-hero" onClick={() => {
                        setCurrentImageIndex(currentImageIndex);
                        setModalImage(productImages[currentImageIndex]);
                    }}>
                        <img
                            src={productImages[currentImageIndex]}
                            alt="Product"
                        />
                    </div>
                    {productImages.length > 1 && (
                        <div className="gallery-thumbnails">
                            {productImages.map((img, index) => (
                                <img
                                    key={index}
                                    src={img}
                                    alt={`Product thumbnail ${index + 1}`}
                                    className={`gallery-thumb ${index === currentImageIndex ? 'active' : ''}`}
                                    onClick={() => setCurrentImageIndex(index)}
                                />
                            ))}
                        </div>
                    )}
                </div>
            )}
            <div id={uniqueId} />
            {modalImage && (
                <div className="simple-image-modal" onClick={() => setModalImage(null)}>
                    <div className="modal-backdrop" />
                    <div className="modal-image-container">
                        <button className="modal-close" onClick={() => setModalImage(null)}>×</button>
                        {modalImage === 'test' ? (
                            <div style={{
                                padding: '40px',
                                backgroundColor: 'white',
                                borderRadius: '8px',
                                textAlign: 'center'
                            }}>
                                <h2>Loading product images...</h2>
                                <p>Please try again in a moment</p>
                            </div>
                        ) : (
                            <>
                                <img 
                                    src={modalImage} 
                                    alt="Product"
                                    onError={(e) => {
                                        // Try replacing http with https if needed
                                        if (modalImage.startsWith('http://')) {
                                            (e.target as HTMLImageElement).src = modalImage.replace('http://', 'https://');
                                        }
                                    }}
                                />
                                {productImages.length > 1 && (
                                    <>
                                        <button 
                                            className="modal-nav modal-prev" 
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                handlePrevImage();
                                            }}
                                        >
                                            ‹
                                        </button>
                                        <button 
                                            className="modal-nav modal-next" 
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                handleNextImage();
                                            }}
                                        >
                                            ›
                                        </button>
                                        <div className="modal-indicators">
                                            {productImages.map((_, index) => (
                                                <span
                                                    key={index}
                                                    className={`indicator ${index === currentImageIndex ? 'active' : ''}`}
                                                    onClick={(e) => {
                                                        e.stopPropagation();
                                                        setCurrentImageIndex(index);
                                                        setModalImage(productImages[index]);
                                                    }}
                                                />
                                            ))}
                                        </div>
                                    </>
                                )}
                            </>
                        )}
                    </div>
                </div>
            )}
        </>
    );
};

export default ShopifyProductDisplay;