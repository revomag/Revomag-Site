import React, { useState } from 'react';
import { Product, formatPrice } from '../../config/products';
import { useCart } from '../../contexts/CartContext';
import './ProductDisplay.scss';

interface ProductDisplayProps {
  product: Product;
  showImages?: boolean;
}

const ProductDisplay: React.FC<ProductDisplayProps> = ({
  product,
  showImages = true
}) => {
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [modalImage, setModalImage] = useState<string | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleAddToCart = () => {
    addToCart(product, quantity);
    // Optional: Show a confirmation message
    alert(`Added ${quantity} ${product.name} to cart!`);
  };

  const handleImageClick = (index: number) => {
    setCurrentImageIndex(index);
    setModalImage(product.images[index]);
  };

  const handlePrevImage = () => {
    const newIndex = currentImageIndex === 0 ? product.images.length - 1 : currentImageIndex - 1;
    setCurrentImageIndex(newIndex);
    setModalImage(product.images[newIndex]);
  };

  const handleNextImage = () => {
    const newIndex = currentImageIndex === product.images.length - 1 ? 0 : currentImageIndex + 1;
    setCurrentImageIndex(newIndex);
    setModalImage(product.images[newIndex]);
  };

  return (
    <>
      <div className="product-display">
        {showImages && product.images.length > 0 && (
          <div className="product-images">
            <div className="main-image" onClick={() => handleImageClick(0)}>
              <img
                src={product.images[0]}
                alt={product.name}
                onError={(e) => {
                  // Hide image if it fails to load
                  (e.target as HTMLImageElement).style.display = 'none';
                }}
              />
            </div>
            {product.images.length > 1 && (
              <div className="image-thumbnails">
                {product.images.slice(1).map((image, index) => (
                  <div
                    key={index}
                    className="thumbnail"
                    onClick={() => handleImageClick(index + 1)}
                  >
                    <img
                      src={image}
                      alt={`${product.name} ${index + 2}`}
                      onError={(e) => {
                        // Hide image if it fails to load
                        (e.target as HTMLImageElement).style.display = 'none';
                      }}
                    />
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        <div className="product-info">
          <div className="product-header">
            <h2 className="product-title">{product.name}</h2>
            <span className="product-price">{formatPrice(product.price)}</span>
          </div>

          <div className="product-actions">
            <div className="quantity-selector">
              <label htmlFor={`quantity-${product.id}`}>Quantity:</label>
              <input
                id={`quantity-${product.id}`}
                type="number"
                min="1"
                max="99"
                value={quantity}
                onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
              />
            </div>

            <button
              className="add-to-cart-button"
              onClick={handleAddToCart}
            >
              Add to cart
            </button>
          </div>
        </div>
      </div>

      {modalImage && (
        <div className="simple-image-modal" onClick={() => setModalImage(null)}>
          <div className="modal-backdrop" />
          <div className="modal-image-container">
            <button className="modal-close" onClick={() => setModalImage(null)}>×</button>
            <img
              src={modalImage}
              alt={product.name}
              onError={() => {
                // Close modal if image fails to load
                setModalImage(null);
              }}
            />
            {product.images.length > 1 && (
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
                  {product.images.map((_, index) => (
                    <span
                      key={index}
                      className={`indicator ${index === currentImageIndex ? 'active' : ''}`}
                      onClick={(e) => {
                        e.stopPropagation();
                        setCurrentImageIndex(index);
                        setModalImage(product.images[index]);
                      }}
                    />
                  ))}
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default ProductDisplay;