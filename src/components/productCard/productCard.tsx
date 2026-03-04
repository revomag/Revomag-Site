import { ReactElement } from 'react';
import { Link } from 'react-router-dom';
import { Product } from '../../data/products';
import './productCard.scss';

interface ProductCardProps {
    product: Product;
}

export default function ProductCard({ product }: ProductCardProps): ReactElement {
    const image = product.cardImage || product.bannerImage;

    return (
        <Link to={`/products/${product.slug}`} className="product-card">
            {image && (
                <div className="product-card-image">
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
