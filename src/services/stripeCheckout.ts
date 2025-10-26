import { loadStripe, Stripe } from '@stripe/stripe-js';
import { CartItem } from '../contexts/CartContext';

// Initialize Stripe (singleton pattern)
let stripePromise: Promise<Stripe | null>;

const getStripe = () => {
  if (!stripePromise) {
    const key = import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY;

    if (!key) {
      throw new Error('Stripe publishable key is not configured');
    }

    stripePromise = loadStripe(key);
  }
  return stripePromise;
};

export interface CheckoutOptions {
  items: CartItem[];
  successUrl?: string;
  cancelUrl?: string;
}

export interface CheckoutError {
  message: string;
  type: 'stripe_error' | 'validation_error' | 'network_error';
}

/**
 * Redirect to Stripe Checkout with cart items
 */
export async function redirectToCheckout(
  options: CheckoutOptions
): Promise<{ error?: CheckoutError }> {
  const { items, successUrl, cancelUrl } = options;

  // Validation
  if (!items || items.length === 0) {
    return {
      error: {
        message: 'Cart is empty',
        type: 'validation_error',
      },
    };
  }

  try {
    // Get Stripe instance
    const stripe = await getStripe();

    if (!stripe) {
      return {
        error: {
          message: 'Failed to load Stripe. Please refresh and try again.',
          type: 'stripe_error',
        },
      };
    }

    // Convert cart items to Stripe line items
    const lineItems = items.map((item) => ({
      price: item.product.stripePriceId,
      quantity: item.quantity,
    }));

    // Validate that all products have price IDs
    const missingPriceIds = items.filter(item => !item.product.stripePriceId);
    if (missingPriceIds.length > 0) {
      return {
        error: {
          message: 'Some products are not configured correctly. Please contact support.',
          type: 'validation_error',
        },
      };
    }

    // Redirect to Stripe Checkout
    // Note: TypeScript types may not include redirectToCheckout, but it's still supported
    // @ts-ignore - redirectToCheckout is available but may not be in latest types
    const { error } = await stripe.redirectToCheckout({
      lineItems,
      mode: 'payment',
      successUrl:
        successUrl ||
        `${window.location.origin}/order-success?session_id={CHECKOUT_SESSION_ID}`,
      cancelUrl: cancelUrl || `${window.location.origin}/cart`,
      shippingAddressCollection: {
        allowedCountries: ['US'], // TODO: Update based on where you ship
      },
      billingAddressCollection: 'auto',
    });

    if (error) {
      console.error('Stripe checkout error:', error);
      return {
        error: {
          message: error.message || 'Failed to redirect to checkout',
          type: 'stripe_error',
        },
      };
    }

    return {}; // Success - user will be redirected
  } catch (err: any) {
    console.error('Checkout error:', err);
    return {
      error: {
        message: err.message || 'An unexpected error occurred',
        type: 'network_error',
      },
    };
  }
}