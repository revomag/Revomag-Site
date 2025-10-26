import React, { useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { useCart } from '../../contexts/CartContext';
import Navigation from '../../components/navigation/navigation';
import './OrderSuccess.scss';

const OrderSuccess: React.FC = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const { clearCart } = useCart();
  const sessionId = searchParams.get('session_id');

  useEffect(() => {
    // Clear the cart when the success page loads
    clearCart();
  }, [clearCart]);

  return (
    <>
      <Navigation />
      <div className="order-success-page">
        <div className="success-container">
          <div className="success-icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
              <polyline points="22 4 12 14.01 9 11.01"></polyline>
            </svg>
          </div>

          <h1>Order Confirmed!</h1>

          <p className="success-message">
            Thank you for your purchase! Your order has been successfully processed.
          </p>

          {sessionId && (
            <div className="order-reference">
              <p>
                <strong>Order Reference:</strong>
              </p>
              <p className="reference-id">{sessionId}</p>
            </div>
          )}

          <div className="what-next">
            <h2>What happens next?</h2>
            <ul>
              <li>You will receive an email confirmation shortly with your order details</li>
              <li>Your order will be processed and shipped within 1-2 business days</li>
              <li>You can expect delivery within 5-7 business days</li>
              <li>If you have any questions, please contact our support team</li>
            </ul>
          </div>

          <div className="action-buttons">
            <button
              className="primary-btn"
              onClick={() => navigate('/products')}
            >
              Continue Shopping
            </button>
            <button
              className="secondary-btn"
              onClick={() => navigate('/')}
            >
              Return to Home
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default OrderSuccess;