import React, { useEffect, useRef } from 'react';

const GetRevomagProductButton: React.FC = () => {
    const shopifyInitialized = useRef(false); // Track if Shopify has been initialized

    useEffect(() => {
        const ShopifyBuyInit = () => {
            const client = window.ShopifyBuy.buildClient({
                domain: '99d84c-f3.myshopify.com',
                storefrontAccessToken: 'b203cc343fe629d92d6022d0a7551415',
            });

            window.ShopifyBuy.UI.onReady(client).then((ui: any) => {
                ui.createComponent('product', {
                    id: '9487266677046',
                    node: document.getElementById('product-component-1724046304183')!,
                    moneyFormat: '%24%7B%7Bamount%7D%7D',
                    options: {
                        product: {
                            styles: {
                                product: {
                                    '@media (min-width: 601px)': {
                                        'max-width': 'calc(25% - 20px)',
                                        'margin-left': '20px',
                                        'margin-bottom': '50px',
                                    },
                                },
                                button: {
                                    'border-radius': '9px',
                                },
                            },
                            contents: {
                                img: false,
                                title: false,
                                price: false,
                            },
                            text: {
                                button: 'Get Revomag',
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
    }, []);

    return <div id="product-component-1724046304183" />;
};

export default GetRevomagProductButton;
