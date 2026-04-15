import { ReactElement } from 'react';
import { Link } from 'react-router-dom';
import { Product } from '../../data/products';
import useProductImage from '../../hooks/useProductImage';
import './productCard.scss';

const SCROLL_POSITION_KEY = 'products_scroll_y';

interface ProductCardProps {
    product: Product;
}

export default function ProductCard({ product }: ProductCardProps): ReactElement {
    const { imageUrl, loading } = useProductImage(product.shopifyProductId);
    const image = imageUrl || product.bannerImage;

    const handleClick = () => {
        sessionStorage.setItem(SCROLL_POSITION_KEY, String(window.scrollY));
    };

    return (
        <Link to={`/products/${product.slug}`} className="product-card" onClick={handleClick}>
            {image && (
                <div className={`product-card-image${loading ? ' loading' : ''}`}>
                    <img src={image} alt={product.name} />
                </div>
            )}
            <div className="product-card-content">
                <h3>{product.name}</h3>
                <p>{product.shortDescription}</p>
                <span className="product-card-cta">View Product</span>
            </div>
        </Link>
    );
}
