import React, { useEffect, useRef } from 'react';

declare global {
    interface Window {
        ShopifyBuy: any;
    }
}

const BuyRevomagFullDescriptionButton: React.FC = () => {
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
                    node: document.getElementById('product-component-1724041284652')!,
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
                                    'text-align': 'left',
                                },
                                title: { 'font-size': '26px' },
                                button: { 'border-radius': '9px' },
                                price: { 'font-size': '18px' },
                                compareAt: { 'font-size': '15.3px' },
                                unitPrice: { 'font-size': '15.3px' },
                            },
                            layout: 'horizontal',
                            contents: {
                                img: false,
                                imgWithCarousel: true,
                                description: true,
                            },
                            width: '100%',
                            text: { button: 'Add to cart' },
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
                            popup: false, // Change to true if you want a popup cart
                        },
                    },
                });
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
    }, []);

    return <div id="product-component-1724041284652" />;
};

export default BuyRevomagFullDescriptionButton;
