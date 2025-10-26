import React from 'react';
import Navigation from '../../components/navigation/navigation';
import ShoppingCart from '../../components/cart/ShoppingCart';
import './CartPage.scss';

const CartPage: React.FC = () => {
  return (
    <>
      <Navigation />
      <div className="cart-page">
        <ShoppingCart />
      </div>
    </>
  );
};

export default CartPage;