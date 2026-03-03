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
 * Create a Checkout Session on the backend and redirect to Stripe Checkout
 *
 * NOTE: This requires a backend API endpoint to create the Checkout Session.
 * The modern Stripe Checkout API requires server-side session creation for security.
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

    // Convert cart items to line items format for backend
    const lineItems = items.map((item) => ({
      price: item.product.stripePriceId,
      quantity: item.quantity,
    }));

    // Call Netlify Function to create Checkout Session
    // In development with netlify dev: use localhost:8888
    // In production: use relative path
    const isDev = import.meta.env.DEV;
    const functionUrl = isDev
      ? 'http://localhost:8888/.netlify/functions/create-checkout-session'
      : '/.netlify/functions/create-checkout-session';

    const response = await fetch(functionUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        lineItems,
        successUrl:
          successUrl ||
          `${window.location.origin}/order-success?session_id={CHECKOUT_SESSION_ID}`,
        cancelUrl: cancelUrl || `${window.location.origin}/cart`,
      }),
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({ error: 'Failed to create checkout session' }));
      return {
        error: {
          message: errorData.error || 'Failed to create checkout session',
          type: 'network_error',
        },
      };
    }

    const { sessionId, url } = await response.json();

    // Redirect to Checkout using the session URL (modern Stripe API)
    if (url) {
      window.location.href = url;
      return {}; // Success - user will be redirected
    }

    // Fallback error if no URL returned
    return {
      error: {
        message: 'No checkout URL returned from server',
        type: 'stripe_error',
      },
    };
  } catch (err: any) {
    console.error('Checkout error:', err);
    return {
      error: {
        message: err.message || 'An unexpected error occurred. Please try again.',
        type: 'network_error',
      },
    };
  }
}