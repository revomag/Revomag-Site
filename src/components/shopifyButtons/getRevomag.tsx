import React, { useEffect, useRef } from 'react';

interface GetRevomagProductButtonProps {
    buttonText?: string;
    className?: string;
}

const GetRevomagProductButton: React.FC<GetRevomagProductButtonProps> = ({
                                                                             buttonText = 'Get Revomag',
                                                                             className = ''
                                                                         }) => {
    const shopifyInitialized = useRef(false);
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const adjustButtonStyles = () => {
            setTimeout(() => {
                const buttons = document.querySelectorAll(`.floating-buy-button .shopify-buy-btn`);

                buttons.forEach((button) => {
                    if (button instanceof HTMLElement) {
                        // For mobile
                        if (window.innerWidth <= 1023) {
                            button.style.setProperty('padding', '10px 10px', 'important');
                            button.style.setProperty('font-size', '14px', 'important');
                        }
                    }
                });
            }, 1000);
        };

        const ShopifyBuyInit = () => {
            const client = window.ShopifyBuy.buildClient({
                domain: '99d84c-f3.myshopify.com',
                storefrontAccessToken: 'b203cc343fe629d92d6022d0a7551415',
            });

            window.ShopifyBuy.UI.onReady(client).then((ui: any) => {
                const componentId = `product-component-${Date.now()}`;

                if (containerRef.current) {
                    containerRef.current.id = componentId;
                }

                ui.createComponent('product', {
                    id: '9487266677046',
                    node: document.getElementById(componentId)!,
                    moneyFormat: '%24%7B%7Bamount%7D%7D',
                    options: {
                        product: {
                            styles: {
                                product: {
                                    'position': 'static',
                                    '@media (min-width: 601px)': {
                                        'max-width': '100%',
                                        'margin': '0',
                                    },
                                },
                                button: {
                                    'position': 'static',
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
                                title: false,
                                price: false,
                            },
                            text: {
                                button: buttonText,
                            },
                        },
                        productSet: {
                            styles: {
                                products: {
                                    '@media (min-width: 601px)': {
                                        'margin-left': '-20px',
                                    },
                                },
                            },
                        },
                        modalProduct: {
                            contents: {
                                img: false,
                                imgWithCarousel: true,
                                button: false,
                                buttonWithQuantity: true,
                            },
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
                                },
                            },
                            text: {
                                button: 'Add to cart',
                            },
                        },
                        cart: {
                            styles: {
                                button: {
                                    'border-radius': '9px',
                                },
                            },
                            text: {
                                total: 'Subtotal',
                                button: 'Checkout',
                            },
                        },
                        toggle: {},
                    },
                });

                // Call adjustButtonStyles after component creation
                adjustButtonStyles();
            });
        };

        const loadScript = () => {
            const script = document.createElement('script');
            script.src = 'https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js';
            script.async = true;
            script.onload = ShopifyBuyInit;
            (document.head || document.body).appendChild(script);
        };

        if (!shopifyInitialized.current) {
            if (!window.ShopifyBuy) {
                loadScript();
            } else if (window.ShopifyBuy.UI) {
                ShopifyBuyInit();
            } else {
                loadScript();
            }
            shopifyInitialized.current = true;
        }

        // Add resize listener
        window.addEventListener('resize', adjustButtonStyles);

        // Cleanup
        return () => {
            window.removeEventListener('resize', adjustButtonStyles);
        };
    }, [buttonText]);

    return <div ref={containerRef} className={className} />;
};

export default GetRevomagProductButton;