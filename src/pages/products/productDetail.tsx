import { ReactElement } from "react";
import { Link, useParams } from "react-router-dom";
import Navigation from "../../components/navigation/navigation";
import Banner from "../../components/banner/banner";
import ShopifyProductDisplay from "../../components/shopifyButtons/shopifyProductDisplay";
import GetRevomagProductButton from "../../components/shopifyButtons/getRevomag";
import ProductCard from "../../components/productCard/productCard";
import {
    getProductBySlug,
    getOtherProducts,
    SHARED_DESCRIPTION,
    WHATS_IN_THE_BOX,
    FEATURES,
} from "../../data/products";
import './productDetail.scss';

export default function ProductDetail(): ReactElement {
    const { slug } = useParams<{ slug: string }>();
    const product = slug ? getProductBySlug(slug) : undefined;

    if (!product) {
        return (
            <>
                <Navigation />
                <div className="product-not-found">
                    <h2>Product Not Found</h2>
                    <p>The product you're looking for doesn't exist.</p>
                    <Link to="/products">Back to Products</Link>
                </div>
            </>
        );
    }

    const otherProducts = getOtherProducts(product.slug);

    return (
        <>
            <Navigation />
            <div id={'buy-now-button-container'}>
                <GetRevomagProductButton
                    buttonText={'Buy Revomag'}
                    className="floating-buy-button"
                    productId={product.shopifyProductId}
                />
            </div>
            <Banner
                imageSrc={product.bannerImage}
                imageAlt={product.name}
                imageTitle={product.name}
            />

            <div className="product-detail">
                <Link to="/products" className="back-to-products">&larr; All Products</Link>

                {product.shopifyProductId && (
                    <div className="product-detail-shopify">
                        <ShopifyProductDisplay
                            key={product.shopifyProductId}
                            productId={product.shopifyProductId}
                            showDescription={false}
                            showImages={true}
                        />
                    </div>
                )}

                {product.uniqueDescription.length > 0 && (
                    <div className="product-detail-unique">
                        {product.uniqueDescription.map((text, index) => (
                            <p key={index}>{text}</p>
                        ))}
                    </div>
                )}

                <div className="product-detail-description">
                    <p>{SHARED_DESCRIPTION}</p>
                    <h3>What's in the Box?</h3>
                    <p dangerouslySetInnerHTML={{ __html: WHATS_IN_THE_BOX }} />
                </div>

                <div className="product-detail-features">
                    <h2>Features:</h2>
                    <ul>
                        {FEATURES.map((feature, index) => (
                            <li key={index}>
                                {feature.title && <span>{feature.title}</span>}{' '}
                                <span dangerouslySetInnerHTML={{ __html: feature.description }} />
                            </li>
                        ))}
                    </ul>
                </div>

                {otherProducts.length > 0 && (
                    <div className="product-detail-other">
                        <h2>Other Products</h2>
                        <div className="other-products-grid">
                            {otherProducts.map((p) => (
                                <ProductCard key={p.slug} product={p} />
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </>
    );
}
