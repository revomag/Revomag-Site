# Stripe Migration Implementation Plan
## Frontend-Only Architecture with Stripe Checkout

## Executive Summary

This document outlines the complete migration strategy for transitioning the Revomag e-commerce platform from Shopify Buy Button SDK to Stripe Checkout (hosted). The migration will replace all Shopify dependencies while maintaining identical UI/UX and functionality **without requiring a custom backend**.

**Current State:**
- React SPA using Shopify Buy Button SDK
- No custom backend infrastructure
- 2 product variants (Regular and Filigree editions of Revomag)
- Both products support 38 special, 357 magnum, and 327 mag calibers
- Client-side only cart and checkout flow
- Redirects to Shopify hosted checkout

**Target State:**
- React SPA with custom cart management (React Context + localStorage)
- **No custom backend required**
- Stripe Checkout (hosted payment page)
- Client-side cart with same UI/UX
- Products managed in Stripe Dashboard
- Redirect to Stripe for payment, return to site after completion

---

## Table of Contents

1. [Architecture Overview](#architecture-overview)
2. [Product Structure](#product-structure)
3. [Technology Stack](#technology-stack)
4. [Implementation Phases](#implementation-phases)
5. [Detailed Implementation Steps](#detailed-implementation-steps)
6. [Stripe Product Configuration](#stripe-product-configuration)
7. [Testing Strategy](#testing-strategy)
8. [Deployment Plan](#deployment-plan)
9. [Rollback Strategy](#rollback-strategy)
10. [Success Metrics](#success-metrics)

---

## Architecture Overview

### Current Architecture

```
┌─────────────────────────────────────────────┐
│           React SPA (Frontend)              │
│  ┌──────────────┐    ┌──────────────────┐  │
│  │ GetRevomag   │    │ Shopify Product  │  │
│  │ Button       │    │ Display          │  │
│  └──────────────┘    └──────────────────┘  │
│           │                    │            │
│           └────────┬───────────┘            │
│                    │                        │
└────────────────────┼────────────────────────┘
                     │
                     ▼
        ┌────────────────────────┐
        │  Shopify Buy Button    │
        │  SDK (JavaScript)      │
        └────────────────────────┘
                     │
                     ▼
        ┌────────────────────────┐
        │  Shopify Storefront    │
        │  API & Checkout        │
        └────────────────────────┘
```

### Target Architecture (Frontend-Only)

```
┌─────────────────────────────────────────────────────────┐
│              React SPA (Frontend)                       │
│                                                         │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐ │
│  │ Product      │  │ Cart Context │  │ Buy Button   │ │
│  │ Display      │  │ (localStorage)  │ Component    │ │
│  └──────┬───────┘  └──────┬───────┘  └──────┬───────┘ │
│         │                  │                  │         │
│         └──────────────────┼──────────────────┘         │
│                            │                            │
└────────────────────────────┼────────────────────────────┘
                            │
                            ▼
              ┌──────────────────────────┐
              │   Stripe.js Library      │
              │ redirectToCheckout()     │
              └──────────────────────────┘
                            │
                            ▼
              ┌──────────────────────────┐
              │  Stripe Hosted Checkout  │
              │  (checkout.stripe.com)   │
              │  - Payment processing    │
              │  - Shipping collection   │
              └──────────────────────────┘
                            │
                            ▼
              ┌──────────────────────────┐
              │   Success/Cancel Pages   │
              │   (getrevomag.com)       │
              └──────────────────────────┘
```

**Key Benefits:**
- ✅ No backend server required
- ✅ No database needed
- ✅ PCI compliant (Stripe handles all payment data)
- ✅ Same UI/UX as current Shopify implementation
- ✅ Easy to maintain and deploy

---

## Product Structure

### Current Shopify Products

Based on the codebase:
- **Product 1:** Revomag (Regular) - Shopify ID: `9487266677046`
- **Product 2:** Revomag (Filigree) - Shopify ID: `10313165603126`

### Product Information

**Base Product:** Revomag - The Original Revolver Mag

**Description:**
> Revomag is the original revolver mag. It is a revolver reloader that is designed to always be with you for personal protection. Fast to draw and easy to carry, Revomag is not at the bottom of your pocket or in a bulky pouch. It is faster than a speed strip, and more concealable than speed loader making it an easy choice for your every day carry. We stand by our patented technology and are proud to say that every piece of the Revomag is made in the USA.

**What's in the Box:**
- Revomag
- Practice Cylinder (for muscle memory development)
- Hex L-Key (for disassembly and cleaning)

**Caliber Support:**
- 38 special
- 357 magnum
- 327 mag

**Variants:**
1. **Regular** - Standard finish
2. **Filigree** - Decorative etched finish (premium edition)

**Price:** (Verify current Shopify pricing - likely $59.99)

### Stripe Product Configuration Strategy

Create **two separate products** in Stripe (simpler for side-by-side display):
- Product 1: "Revomag" (Regular)
- Product 2: "Revomag - Filigree Edition"

---

## Technology Stack

### Frontend (Minimal Changes Required)
- **Framework:** React 18.2.0 + TypeScript (existing)
- **Build Tool:** Vite 4.4.5 (existing)
- **Routing:** React Router DOM 6.16.0 (existing)
- **Styling:** SASS/SCSS (existing)
- **State Management:** React Context API (new for cart)
- **Storage:** localStorage (for cart persistence)

### Stripe Integration
- **Product Management:** Stripe Dashboard
- **Checkout:** Stripe Checkout (hosted)
- **SDK:** `@stripe/stripe-js` (client-side only)
- **Payment Processing:** Fully managed by Stripe
- **No backend SDK required**

### Infrastructure
- **Hosting:** Netlify (existing)
- **Database:** None required
- **Server:** None required
- **Product Data:** Hardcoded in frontend configuration file

---

## Implementation Phases

### Phase 1: Stripe Account & Product Setup
**Duration:** 1-2 days

- [ ] Create Stripe account (or use existing)
- [ ] Set up 2 products in Stripe Dashboard
- [ ] Upload product images to Stripe
- [ ] Configure checkout settings
- [ ] Get API keys (publishable key)
- [ ] Note Price IDs for each product

### Phase 2: Frontend Cart Implementation
**Duration:** 3-4 days

- [ ] Install `@stripe/stripe-js` package
- [ ] Create Cart Context (React Context API)
- [ ] Implement cart state management
- [ ] Add localStorage persistence
- [ ] Create product configuration file
- [ ] Wrap App with CartProvider

### Phase 3: Component Development
**Duration:** 4-5 days

- [ ] Create new ProductDisplay component
- [ ] Create ShoppingCart component
- [ ] Create CartWidget for navigation
- [ ] Update BuyButton component
- [ ] Create OrderSuccess page
- [ ] Style components to match existing design

### Phase 4: Stripe Checkout Integration
**Duration:** 2-3 days

- [ ] Create Stripe checkout service
- [ ] Implement redirectToCheckout logic
- [ ] Configure success/cancel URLs
- [ ] Handle cart clearing on success
- [ ] Test checkout flow

### Phase 5: Page Updates & Migration
**Duration:** 2-3 days

- [ ] Update Products page
- [ ] Update Home page
- [ ] Add Cart page route
- [ ] Add OrderSuccess page route
- [ ] Update navigation with cart icon
- [ ] Remove Shopify components

### Phase 6: Testing & QA
**Duration:** 3-4 days

- [ ] Test cart functionality (add/remove/update)
- [ ] Test cart persistence (localStorage)
- [ ] Test checkout with Stripe test cards
- [ ] Test success/cancel flows
- [ ] Mobile responsiveness testing
- [ ] Cross-browser testing
- [ ] Performance testing

### Phase 7: Deployment
**Duration:** 1-2 days

- [ ] Deploy to staging with test keys
- [ ] Complete full test purchase
- [ ] Switch to production keys
- [ ] Deploy to production
- [ ] Monitor for 48 hours
- [ ] Keep Shopify as backup for 2 weeks

**Total Timeline: 16-23 days (2.5-3.5 weeks)**

---

## Detailed Implementation Steps

### Step 1: Stripe Dashboard Setup

#### 1.1 Create Stripe Account

1. Go to [stripe.com](https://stripe.com)
2. Sign up or log in
3. Complete business verification
4. Activate payments

#### 1.2 Create Products in Stripe Dashboard

**Navigate to:** Dashboard → Products → Add Product

**Product 1: Revomag (Regular)**

```
Name: Revomag

Description:
Revomag is the original revolver mag. It is a revolver reloader that is
designed to always be with you for personal protection. Fast to draw and
easy to carry, Revomag is not at the bottom of your pocket or in a bulky
pouch. It is faster than a speed strip, and more concealable than speed
loader making it an easy choice for your every day carry. We stand by our
patented technology and are proud to say that every piece of the Revomag
is made in the USA.

Includes: Practice Cylinder for muscle memory development and Hex L-Key
for disassembly and cleaning.

Price: $XX.XX USD (verify current Shopify pricing - one-time payment)
Recurring: No

Images:
- Upload 3-4 high-quality product images from Shopify

Metadata (optional but recommended):
  variant: "regular"
  sku: "REVO-REG-001"
  calibers: "38 special, 357 magnum, 327 mag"
  shopify_id: "9487266677046"

Save product and copy:
  Product ID: prod_xxxxxxxxxx
  Price ID: price_xxxxxxxxxx (you'll use this in frontend code)
```

**Product 2: Revomag - Filigree Edition**

```
Name: Revomag - Filigree Edition

Description:
Revomag is the original revolver mag. It is a revolver reloader that is
designed to always be with you for personal protection. Fast to draw and
easy to carry, Revomag is not at the bottom of your pocket or in a bulky
pouch. It is faster than a speed strip, and more concealable than speed
loader making it an easy choice for your every day carry. We stand by our
patented technology and are proud to say that every piece of the Revomag
is made in the USA.

This premium Filigree Edition features decorative etching for an elegant finish.

Includes: Practice Cylinder for muscle memory development and Hex L-Key
for disassembly and cleaning.

Price: $XX.XX USD (verify pricing - may be same or premium)
Recurring: No

Images:
- Upload 2-3 high-quality product images showing filigree detail

Metadata:
  variant: "filigree"
  sku: "REVO-FIL-001"
  calibers: "38 special, 357 magnum, 327 mag"
  shopify_id: "10313165603126"

Save product and copy:
  Product ID: prod_yyyyyyyyyy
  Price ID: price_yyyyyyyyyy
```

#### 1.3 Configure Checkout Settings

**Navigate to:** Settings → Checkout and customer portal

```
✓ Collect shipping address
✓ Collect phone number (optional)
✓ Allow promotion codes (optional - for future discounts)

Success URL: https://getrevomag.com/order-success?session_id={CHECKOUT_SESSION_ID}
Cancel URL: https://getrevomag.com/cart

Email receipts: Enable automatic email receipts
Customize email: Add logo and brand colors
```

#### 1.4 Configure Shipping (Optional)

**Navigate to:** Settings → Shipping rates

```
Option 1: Free shipping (recommended for simplicity)
  - Add shipping rate: "Free Shipping"
  - Amount: $0.00
  - Available to: United States

Option 2: Flat rate
  - Add shipping rate: "Standard Shipping"
  - Amount: $5.00
  - Available to: United States
```

#### 1.5 Get API Keys

**Navigate to:** Developers → API keys

```
Test Mode (for development):
  Publishable key: pk_test_51xxxxxxxxxxxxxxxxxxxxx

Production Mode (for live site):
  Publishable key: pk_live_51xxxxxxxxxxxxxxxxxxxxx

⚠️ NOTE: You do NOT need the Secret key for a frontend-only implementation
```

---

### Step 2: Frontend Installation & Configuration

#### 2.1 Install Dependencies

```bash
# Navigate to project root
cd /Users/brandoncantello/Code/RevoMag

# Install Stripe.js
npm install @stripe/stripe-js
```

#### 2.2 Create Environment Variables

**Create/Update `.env` file:**

```bash
# Stripe Configuration
VITE_STRIPE_PUBLISHABLE_KEY=pk_test_51xxxxxxxxxxxxxxxxxxxxx

# Product Price IDs from Stripe Dashboard
VITE_STRIPE_PRICE_ID_REGULAR=price_xxxxxxxxxx
VITE_STRIPE_PRICE_ID_FILIGREE=price_yyyyyyyyyy
```

**Create `.env.example` for documentation:**

```bash
# Stripe Configuration
VITE_STRIPE_PUBLISHABLE_KEY=pk_test_your_publishable_key_here

# Product Price IDs
VITE_STRIPE_PRICE_ID_REGULAR=price_your_regular_price_id
VITE_STRIPE_PRICE_ID_FILIGREE=price_your_filigree_price_id
```

**Update `.gitignore` to protect secrets:**

```bash
# Environment variables
.env
.env.local
.env.production
```

#### 2.3 Create Product Configuration

```typescript
// src/config/products.ts

export interface Product {
  id: string;
  name: string;
  description: string;
  price: number; // in cents
  stripePriceId: string;
  images: string[];
  variant: 'regular' | 'filigree';
  features: string[];
}

// Shared product description
export const PRODUCT_DESCRIPTION = `Revomag is the original revolver mag. It is a revolver reloader that is designed to always be with you for personal protection. Fast to draw and easy to carry, Revomag is not at the bottom of your pocket or in a bulky pouch. It is faster than a speed strip, and more concealable than speed loader making it an easy choice for your every day carry. We stand by our patented technology and are proud to say that every piece of the Revomag is made in the USA.`;

export const WHATS_IN_BOX = `Included with the Revomag is a Practice Cylinder for muscle memory development and a Hex L-Key to disassembly for cleaning.`;

export const PRODUCT_FEATURES = [
  'Secure Grip: Textured stippling provides enhanced grip, ensuring steady handling even in challenging conditions.',
  'Durable Construction: Made from tough nylon for long-lasting performance.',
  'Smooth & Snag-Free: The clip has a rounded end which is snag free and ensures comfort and ease of use. It also has a flat black Cerakote finish which adds resilience.',
  'Ambidextrous Design: Perfect for both left and right-handed users, offering flexibility and ease of use for everyone.',
  'Versatile Carry: Can be carried in the pocket or inside the waistband which provide comfortable and discreet options for everyday carry.',
  'Self-Defense Ready: The point at the top is a SMACK CAP or striking surface. This offers an effective less-than-lethal force option when needed.',
  'Efficient Capacity: Holds eight 38 special or 357 magnum, or nine 327 mag, ensuring you\'re always prepared. (357 has limited compatibility. Cartridges must not exceed 1.54 inches or 39.11mm in length. See Frequently Asked Questions for additional information.)',
  'Safer Storage: Reduces lead exposure by 87% when compared to an 8 cartridge speed strip. This makes pocket storage cleaner and safer.',
  'Build Muscle Memory: Includes a practice cylinder to help you develop the necessary skills and confidence for quick and accurate reloading.',
  'Easy Maintenance: Comes with a hex L-key to disassemble for cleaning and to swap the belt clip for left-handed users.',
];

export const PRODUCTS: Record<string, Product> = {
  regular: {
    id: 'regular',
    name: 'Revomag',
    description: PRODUCT_DESCRIPTION,
    price: 5999, // $59.99 in cents - UPDATE WITH ACTUAL PRICE
    stripePriceId: import.meta.env.VITE_STRIPE_PRICE_ID_REGULAR,
    variant: 'regular',
    images: [
      '/images/revomag-regular-1.jpg',
      '/images/revomag-regular-2.jpg',
      '/images/revomag-regular-3.jpg',
    ],
    features: PRODUCT_FEATURES,
  },
  filigree: {
    id: 'filigree',
    name: 'Revomag - Filigree Edition',
    description: PRODUCT_DESCRIPTION,
    price: 5999, // $59.99 in cents - UPDATE WITH ACTUAL PRICE
    stripePriceId: import.meta.env.VITE_STRIPE_PRICE_ID_FILIGREE,
    variant: 'filigree',
    images: [
      '/images/revomag-filigree-1.jpg',
      '/images/revomag-filigree-2.jpg',
    ],
    features: PRODUCT_FEATURES,
  },
};

// Helper functions
export const getProduct = (id: string): Product | undefined => {
  return PRODUCTS[id];
};

export const getAllProducts = (): Product[] => {
  return Object.values(PRODUCTS);
};

// Helper to format price for display
export const formatPrice = (priceInCents: number): string => {
  return `$${(priceInCents / 100).toFixed(2)}`;
};
```

---

### Step 3: Cart Context Implementation

```typescript
// src/contexts/CartContext.tsx

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { Product } from '../config/products';

export interface CartItem {
  product: Product;
  quantity: number;
}

interface CartContextType {
  items: CartItem[];
  addToCart: (product: Product, quantity?: number) => void;
  removeFromCart: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  clearCart: () => void;
  getCartTotal: () => number;
  getItemCount: () => number;
  isInCart: (productId: string) => boolean;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

const CART_STORAGE_KEY = 'revomag_cart';

export const CartProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  // Initialize cart from localStorage
  const [items, setItems] = useState<CartItem[]>(() => {
    try {
      const savedCart = localStorage.getItem(CART_STORAGE_KEY);
      return savedCart ? JSON.parse(savedCart) : [];
    } catch (error) {
      console.error('Error loading cart from localStorage:', error);
      return [];
    }
  });

  // Persist cart to localStorage whenever it changes
  useEffect(() => {
    try {
      localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(items));
    } catch (error) {
      console.error('Error saving cart to localStorage:', error);
    }
  }, [items]);

  const addToCart = (product: Product, quantity = 1) => {
    setItems((prevItems) => {
      const existingItemIndex = prevItems.findIndex(
        (item) => item.product.id === product.id
      );

      if (existingItemIndex > -1) {
        // Update quantity if item already exists
        const updatedItems = [...prevItems];
        updatedItems[existingItemIndex] = {
          ...updatedItems[existingItemIndex],
          quantity: updatedItems[existingItemIndex].quantity + quantity,
        };
        return updatedItems;
      }

      // Add new item
      return [...prevItems, { product, quantity }];
    });
  };

  const removeFromCart = (productId: string) => {
    setItems((prevItems) => prevItems.filter((item) => item.product.id !== productId));
  };

  const updateQuantity = (productId: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(productId);
      return;
    }

    setItems((prevItems) =>
      prevItems.map((item) =>
        item.product.id === productId ? { ...item, quantity } : item
      )
    );
  };

  const clearCart = () => {
    setItems([]);
  };

  const getCartTotal = () => {
    return items.reduce((total, item) => total + item.product.price * item.quantity, 0);
  };

  const getItemCount = () => {
    return items.reduce((count, item) => count + item.quantity, 0);
  };

  const isInCart = (productId: string) => {
    return items.some((item) => item.product.id === productId);
  };

  return (
    <CartContext.Provider
      value={{
        items,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        getCartTotal,
        getItemCount,
        isInCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

// Custom hook to use cart context
export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within CartProvider');
  }
  return context;
};
```

---

### Step 4: Stripe Checkout Service

```typescript
// src/services/stripeCheckout.ts

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
    const { error } = await stripe.redirectToCheckout({
      lineItems,
      mode: 'payment',
      successUrl:
        successUrl ||
        `${window.location.origin}/order-success?session_id={CHECKOUT_SESSION_ID}`,
      cancelUrl: cancelUrl || `${window.location.origin}/cart`,
      shippingAddressCollection: {
        allowedCountries: ['US'], // Update based on where you ship
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
```

---

## Component Implementation

I'll include the key component code in the implementation plan, but to keep the document concise, refer to the detailed component files that match the existing Shopify styling:

1. **ProductDisplay** - Replaces ShopifyProductDisplay
2. **ShoppingCart** - Cart page component
3. **CartWidget** - Navigation cart icon with badge
4. **BuyButton** - Replaces GetRevomag button
5. **OrderSuccess** - Success page after payment

All components will maintain the exact same styling:
- Primary color: `#FE6A09` (orange)
- Hover color: `#556B2F` (olive green)
- Border radius: `9px`
- Same responsive breakpoints
- Same typography and spacing

---

## Testing Strategy

### Stripe Test Cards

```
Success:
  4242 4242 4242 4242 (Visa)
  5555 5555 5555 4444 (Mastercard)

Declined:
  4000 0000 0000 0002

Requires 3D Secure:
  4000 0025 0000 3155
```

### Test Scenarios

1. Add Regular product to cart
2. Add Filigree product to cart
3. Update quantities
4. Proceed to checkout
5. Complete payment with test card
6. Verify redirect to success page
7. Verify cart is cleared

---

## Deployment Plan

1. **Staging** - Deploy with test keys, complete full testing
2. **Production** - Switch to live keys, deploy, monitor
3. **Post-Deployment** - Monitor for 48 hours, keep Shopify as backup

---

## Success Metrics

- Page load time ≤ 2 seconds
- Conversion rate ≥ current Shopify baseline
- Zero payment errors
- Customer experience identical to current

---

## Conclusion

This frontend-only migration provides a simple, maintainable solution with:

✅ No backend infrastructure
✅ 2-3 week implementation
✅ Same user experience
✅ Lower monthly costs
✅ Full PCI compliance
✅ Easy rollback if needed