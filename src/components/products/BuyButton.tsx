import React from 'react';
import './BuyButton.scss';

interface BuyButtonProps {
  buttonText?: string;
  className?: string;
}

const BuyButton: React.FC<BuyButtonProps> = ({
  buttonText = 'Get Revomag',
  className = ''
}) => {
  const handleClick = () => {
    window.location.href = '/products';
  };

  return (
    <div className={`buy-button-wrapper ${className}`}>
      <button
        className="buy-button"
        onClick={handleClick}
      >
        {buttonText}
      </button>
    </div>
  );
};

export default BuyButton;