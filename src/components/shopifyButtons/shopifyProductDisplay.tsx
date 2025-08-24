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
            // Check for preloaded images first
            const preloader = ProductImagePreloader.getInstance();
            const preloadedImages = preloader.getPreloadedImages(productId);
            
            if (preloadedImages && preloadedImages.length > 0) {
                setProductImages(preloadedImages);
                console.log(`Using ${preloadedImages.length} preloaded images for product ${productId}`);
            }

            const client = window.ShopifyBuy.buildClient({
                domain: '99d84c-f3.myshopify.com',
                storefrontAccessToken: 'b203cc343fe629d92d6022d0a7551415',
            });
            
            clientRef.current = client;
            
            // Only fetch product data if we don't have preloaded images
            if (!preloadedImages || preloadedImages.length === 0) {
                client.product.fetch(productId).then((product: any) => {
                    if (product) {
                        // Extract product images
                        if (product.images) {
                            const imageUrls = product.images.map((img: any) => img.src)
                                .filter((url: string) => 
                                    url && url.startsWith('http') && 
                                    !url.includes('‹') && 
                                    !url.includes('›')
                                );
                            setProductImages(imageUrls);
                        }
                    }
                }).catch(() => {
                    // Try to extract images from the iframe by messaging
                    setTimeout(() => {
                    const container = document.getElementById(uniqueId);
                    if (container) {
                        const iframe = container.querySelector('iframe');
                        if (iframe && iframe.contentWindow) {
                            // Try to inspect the iframe's document (may fail due to CORS)
                            try {
                                const iframeDoc = iframe.contentDocument || iframe.contentWindow.document;
                                if (iframeDoc) {
                                    // Extract product images
                                    const images = iframeDoc.querySelectorAll('img');
                                    const imageUrls: string[] = [];
                                    images.forEach((img: any) => {
                                        if (img.src && 
                                           !img.src.includes('data:image') && 
                                           img.src.startsWith('http') && 
                                           !img.src.includes('‹') && 
                                           !img.src.includes('›') &&
                                           !img.src.includes('arrow.svg') &&
                                           !img.src.endsWith('.svg')) {
                                            imageUrls.push(img.src);
                                        }
                                    });
                                    // Also try to find image variants or thumbnails
                                    const allImageElements = iframeDoc.querySelectorAll('[src*=".jpg"], [src*=".png"], [style*="background-image"]');
                                    
                                    allImageElements.forEach((el: any) => {
                                        let imageSrc = el.src;
                                        if (!imageSrc && el.style.backgroundImage) {
                                            const match = el.style.backgroundImage.match(/url\("?([^"]*)"?\)/);
                                            imageSrc = match ? match[1] : null;
                                        }
                                        if (imageSrc && imageSrc.includes('cdn.shopify.com') && !imageUrls.includes(imageSrc)) {
                                            // Convert small thumbnails to larger versions
                                            let highResUrl = imageSrc;
                                            if (imageSrc.includes('_100x100')) {
                                                highResUrl = imageSrc.replace('_100x100', '_1000x1500');
                                            }
                                            
                                            if (!imageUrls.includes(highResUrl)) {
                                                imageUrls.push(highResUrl);
                                            }
                                        }
                                    });
                                    
                                    if (imageUrls.length > 0) {
                                        setProductImages(imageUrls);
                                        return;
                                    }
                                }
                            } catch (e) {
                                // Cannot access iframe content (CORS blocked)
                            }
                        }
                    }
                    
                    
                }, 3000);
                });
            }

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
                                imgWithCarousel: showImages,
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

                // Since Shopify uses iframes, we'll create a click overlay
                const setupClickOverlay = () => {
                    const container = document.getElementById(uniqueId);
                    
                    if (container) {
                        // Remove any existing overlays first
                        const existingOverlay = container.querySelector('.shopify-image-overlay');
                        if (existingOverlay) {
                            existingOverlay.remove();
                        }
                        
                        // Find the iframe
                        const iframe = container.querySelector('iframe');
                        
                        if (iframe) {
                            // Wait a bit more for iframe to fully load
                            setTimeout(() => {
                                // Create an overlay div that covers only the image area (top portion)
                                const overlay = document.createElement('div');
                                overlay.className = 'shopify-image-overlay';
                                overlay.style.cssText = `
                                    position: absolute;
                                    top: 0;
                                    left: 0;
                                    width: 100%;
                                    height: 65%;
                                    z-index: 100;
                                    cursor: pointer;
                                    background: transparent;
                                    pointer-events: auto;
                                `;
                                
                                // Make the container relative positioned
                                container.style.position = 'relative';
                                
                                // Add click handler to overlay
                                overlay.addEventListener('click', (e: MouseEvent) => {
                                    e.preventDefault();
                                    e.stopPropagation();
                                    if (productImagesRef.current.length > 0) {
                                        const firstImage = productImagesRef.current[0];
                                        setCurrentImageIndex(0);
                                        setModalImage(firstImage);
                                    } else {
                                        setModalImage('test');
                                    }
                                });
                                
                                // Append overlay to container
                                container.appendChild(overlay);
                            }, 500);
                        }
                    }
                };
                
                // Try multiple times to ensure iframe has loaded and Shopify content is ready
                setTimeout(setupClickOverlay, 1500);
                setTimeout(setupClickOverlay, 2500);
                setTimeout(setupClickOverlay, 4000);
                setTimeout(setupClickOverlay, 6000);
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