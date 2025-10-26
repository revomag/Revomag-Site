import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../../contexts/CartContext';
import { formatPrice } from '../../config/products';
import { redirectToCheckout } from '../../services/stripeCheckout';
import './ShoppingCart.scss';

const ShoppingCart: React.FC = () => {
  const navigate = useNavigate();
  const { items, updateQuantity, removeFromCart, getCartTotal } = useCart();
  const [isCheckingOut, setIsCheckingOut] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleCheckout = async () => {
    setIsCheckingOut(true);
    setError(null);

    const result = await redirectToCheckout({ items });

    if (result.error) {
      setError(result.error.message);
      setIsCheckingOut(false);
    }
    // If no error, user will be redirected to Stripe Checkout
  };

  const handleQuantityChange = (productId: string, newQuantity: number) => {
    if (newQuantity <= 0) {
      removeFromCart(productId);
    } else {
      updateQuantity(productId, newQuantity);
    }
  };

  if (items.length === 0) {
    return (
      <div className="shopping-cart empty">
        <h2>Your cart is empty</h2>
        <p>Add some products to get started!</p>
        <button
          className="continue-shopping-btn"
          onClick={() => navigate('/products')}
        >
          Continue Shopping
        </button>
      </div>
    );
  }

  return (
    <div className="shopping-cart">
      <h2>Shopping Cart</h2>

      <div className="cart-items">
        {items.map((item) => (
          <div key={item.product.id} className="cart-item">
            <div className="item-image">
              <img
                src={item.product.images[0]}
                alt={item.product.name}
                onError={(e) => {
                  (e.target as HTMLImageElement).src = 'https://via.placeholder.com/100x100?text=Product';
                }}
              />
            </div>

            <div className="item-details">
              <h3 className="item-name">{item.product.name}</h3>
              <p className="item-price">{formatPrice(item.product.price)}</p>
            </div>

            <div className="item-quantity">
              <label htmlFor={`qty-${item.product.id}`}>Qty:</label>
              <div className="quantity-controls">
                <button
                  className="qty-btn"
                  onClick={() => handleQuantityChange(item.product.id, item.quantity - 1)}
                  aria-label="Decrease quantity"
                >
                  −
                </button>
                <input
                  id={`qty-${item.product.id}`}
                  type="number"
                  min="1"
                  max="99"
                  value={item.quantity}
                  onChange={(e) => handleQuantityChange(item.product.id, parseInt(e.target.value) || 1)}
                />
                <button
                  className="qty-btn"
                  onClick={() => handleQuantityChange(item.product.id, item.quantity + 1)}
                  aria-label="Increase quantity"
                >
                  +
                </button>
              </div>
            </div>

            <div className="item-total">
              <p>{formatPrice(item.product.price * item.quantity)}</p>
            </div>

            <button
              className="remove-btn"
              onClick={() => removeFromCart(item.product.id)}
              aria-label="Remove item"
            >
              ×
            </button>
          </div>
        ))}
      </div>

      <div className="cart-summary">
        <div className="summary-row">
          <span className="summary-label">Subtotal:</span>
          <span className="summary-value">{formatPrice(getCartTotal())}</span>
        </div>

        {error && (
          <div className="checkout-error">
            {error}
          </div>
        )}

        <button
          className="checkout-btn"
          onClick={handleCheckout}
          disabled={isCheckingOut}
        >
          {isCheckingOut ? 'Redirecting...' : 'Proceed to Checkout'}
        </button>

        <button
          className="continue-shopping-btn"
          onClick={() => navigate('/products')}
        >
          Continue Shopping
        </button>
      </div>
    </div>
  );
};

export default ShoppingCart;