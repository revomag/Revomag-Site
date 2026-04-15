import { ReactElement, useEffect } from "react";
import Navigation from "../../components/navigation/navigation";
import Banner from "../../components/banner/banner";
import Hero from "../../assets/bannerImages/RevomagLoading.jpg";
import ProductCard from "../../components/productCard/productCard";
import GetRevomagProductButton from "../../components/shopifyButtons/getRevomag";
import { getActiveProducts } from "../../data/products";
import './products.scss';

const SCROLL_POSITION_KEY = 'products_scroll_y';

export default function Products(): ReactElement {
    const products = getActiveProducts();

    useEffect(() => {
        const savedY = sessionStorage.getItem(SCROLL_POSITION_KEY);
        if (savedY) {
            // Use rAF to run after withScrollRestoration's scrollTo(0, 0)
            requestAnimationFrame(() => {
                window.scrollTo(0, parseInt(savedY, 10));
            });
            sessionStorage.removeItem(SCROLL_POSITION_KEY);
        }
    }, []);

    return (
        <>
            <Navigation />
            <div id={'buy-now-button-container'}>
                <GetRevomagProductButton
                    buttonText={'Buy Revomag'}
                    className="floating-buy-button"
                />
            </div>
            <Banner
                imageSrc={Hero}
                imageAlt={'Revomag size in hand'}
                imageTitle={'Revomag size in hand'}
            />

            <div className="catalog-grid">
                {products.map((product) => (
                    <ProductCard key={product.slug} product={product} />
                ))}
            </div>
        </>
    );
}
