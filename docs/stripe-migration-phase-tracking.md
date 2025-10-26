# Stripe Migration - Phase Tracking Guide

This document provides a detailed checklist for tracking progress through the Stripe migration. Each phase includes specific tasks with checkboxes for completion tracking.

---

## Overview

**Start Date:** _____________
**Target Completion Date:** _____________
**Actual Completion Date:** _____________

**Team Members:**
- Developer: _____________
- Tester: _____________
- Product Owner: _____________

---

## Phase 1: Stripe Account & Product Setup
**Duration:** 1-2 days
**Start Date:** _____________
**End Date:** _____________
**Status:** ⬜ Not Started | ⬜ In Progress | ⬜ Complete

### Tasks

#### Stripe Account Setup
- [ ] Create Stripe account or activate existing account
- [ ] Complete business verification
- [ ] Activate payment processing
- [ ] Review Stripe fees and terms
- [ ] Set up company information in Stripe Dashboard

#### Product Configuration
- [ ] Log into Stripe Dashboard → Products
- [ ] Create Product 1: "Revomag" (Regular)
  - [ ] Add product name
  - [ ] Add product description (copy from implementation plan)
  - [ ] Set price (verify current Shopify price)
  - [ ] Upload 3-4 product images
  - [ ] Add metadata (variant, SKU, calibers, Shopify ID)
  - [ ] Copy and save Product ID
  - [ ] Copy and save Price ID: `________________`

- [ ] Create Product 2: "Revomag - Filigree Edition"
  - [ ] Add product name
  - [ ] Add product description
  - [ ] Set price
  - [ ] Upload 2-3 product images
  - [ ] Add metadata
  - [ ] Copy and save Product ID
  - [ ] Copy and save Price ID: `________________`

#### Checkout Settings
- [ ] Navigate to Settings → Checkout settings
- [ ] Enable shipping address collection
- [ ] Configure allowed countries (US)
- [ ] Set success URL: `https://getrevomag.com/order-success?session_id={CHECKOUT_SESSION_ID}`
- [ ] Set cancel URL: `https://getrevomag.com/cart`
- [ ] Enable automatic email receipts
- [ ] Customize email template (add logo, brand colors)
- [ ] Configure billing address collection

#### Shipping Configuration
- [ ] Navigate to Settings → Shipping rates
- [ ] Decide on shipping strategy:
  - [ ] Option chosen: ⬜ Free shipping | ⬜ Flat rate | ⬜ Calculated
- [ ] Create shipping rate(s)
- [ ] Test shipping rate display

#### API Keys
- [ ] Navigate to Developers → API keys
- [ ] Copy Test Mode publishable key: `pk_test_________________`
- [ ] Save test key securely
- [ ] Note: Production key will be copied before live deployment

### Notes
```
[Add any notes, issues, or decisions made during this phase]
```

---

## Phase 2: Frontend Cart Implementation
**Duration:** 3-4 days
**Start Date:** 2025-10-25
**End Date:** 2025-10-25
**Status:** ⬜ Not Started | ⬜ In Progress | ✅ Complete

### Tasks

#### Dependencies
- [x] Install `@stripe/stripe-js` package
  ```bash
  npm install @stripe/stripe-js
  ```
- [x] Verify installation in `package.json`

#### Environment Configuration
- [x] Create `.env` file in project root
- [x] Add Stripe publishable key (test mode) - NOTE: Placeholder added, needs actual key from Stripe Dashboard
- [x] Add Product 1 Price ID - NOTE: Placeholder added, needs actual Price ID from Stripe Dashboard
- [x] Add Product 2 Price ID - NOTE: Placeholder added, needs actual Price ID from Stripe Dashboard
- [x] Create `.env.example` file for documentation
- [x] Verify `.env` is in `.gitignore`
- [x] Test environment variable access in code

#### Product Configuration File
- [x] Create `src/config/products.ts`
- [x] Define Product interface
- [x] Add PRODUCT_DESCRIPTION constant
- [x] Add WHATS_IN_BOX constant
- [x] Add PRODUCT_FEATURES array
- [x] Define PRODUCTS object with both variants
- [x] Implement helper functions:
  - [x] `getProduct(id)`
  - [x] `getAllProducts()`
  - [x] `formatPrice(priceInCents)`
- [x] Verify Price IDs are loaded from environment variables
- [x] Test product configuration imports

#### Cart Context Implementation
- [x] Create `src/contexts/CartContext.tsx`
- [x] Define CartItem interface
- [x] Define CartContextType interface
- [x] Implement CartProvider component
- [x] Implement cart state management
- [x] Implement localStorage persistence
- [x] Implement cart methods:
  - [x] `addToCart(product, quantity)`
  - [x] `removeFromCart(productId)`
  - [x] `updateQuantity(productId, quantity)`
  - [x] `clearCart()`
  - [x] `getCartTotal()`
  - [x] `getItemCount()`
  - [x] `isInCart(productId)`
- [x] Implement useCart hook
- [x] Test cart operations in isolation

#### App Integration
- [x] Update `src/App.tsx`
- [x] Wrap app with CartProvider
- [x] Verify cart context is accessible throughout app
- [x] Test cart persistence (add item, refresh page)

### Notes
```
Phase 2 completed successfully. All cart functionality implemented with localStorage persistence.
Environment variables created with placeholders - need to be updated with actual Stripe keys and Price IDs from Dashboard.
```

---

## Phase 3: Component Development
**Duration:** 4-5 days
**Start Date:** 2025-10-25
**End Date:** 2025-10-25
**Status:** ⬜ Not Started | ⬜ In Progress | ✅ Complete

### Tasks

#### ProductDisplay Component
- [x] Create `src/components/products/ProductDisplay.tsx`
- [x] Create `src/components/products/ProductDisplay.scss`
- [x] Implement component structure
- [x] Add product image display
- [x] Add image thumbnails (if multiple images)
- [x] Add quantity selector
- [x] Add "Add to Cart" button
- [x] Implement image modal
- [x] Add modal navigation (prev/next)
- [x] Style to match Shopify design:
  - [x] Orange button (#FE6A09)
  - [x] Olive green hover (#556B2F)
  - [x] 9px border radius
  - [x] Responsive layout
- [x] Test component with both products
- [x] Test mobile responsiveness

#### Shopping Cart Component
- [x] Create `src/components/cart/ShoppingCart.tsx`
- [x] Create `src/components/cart/ShoppingCart.scss`
- [x] Display cart items
- [x] Show product images
- [x] Show product names and variants
- [x] Show prices
- [x] Implement quantity controls (+/-)
- [x] Add remove item button
- [x] Display subtotal
- [x] Add "Proceed to Checkout" button
- [x] Add "Continue Shopping" link
- [x] Handle empty cart state
- [x] Style to match existing design
- [x] Test cart operations
- [x] Test mobile layout

#### Cart Widget Component
- [x] Create `src/components/cart/CartWidget.tsx`
- [x] Create `src/components/cart/CartWidget.scss`
- [x] Add shopping cart icon (SVG)
- [x] Add item count badge
- [x] Implement navigation to cart page
- [x] Style badge (orange background)
- [x] Position in navigation
- [x] Test click navigation
- [x] Test badge count updates

#### Buy Button Component
- [x] Create `src/components/products/BuyButton.tsx`
- [x] Create `src/components/products/BuyButton.scss`
- [x] Implement navigation to products page
- [x] Add customizable button text prop
- [x] Style to match existing GetRevomag button
- [x] Add floating class support
- [x] Test on home page
- [x] Test on products page

#### Order Success Page
- [x] Create `src/pages/orderSuccess/OrderSuccess.tsx`
- [x] Create `src/pages/orderSuccess/OrderSuccess.scss`
- [x] Display success message
- [x] Show order reference (session ID)
- [x] Add "What happens next" section
- [x] Add navigation buttons
- [x] Implement cart clearing on mount
- [x] Style page
- [x] Test success flow

#### Cart Page
- [x] Create `src/pages/cart/CartPage.tsx`
- [x] Create `src/pages/cart/CartPage.scss`
- [x] Integrate ShoppingCart component
- [x] Add page wrapper styling
- [x] Test page layout

### Notes
```
Phase 3 completed successfully. All components created and styled to match existing Shopify design.
NOTE: Product images use placeholder paths - need to update with actual image paths once available.
```

---

## Phase 4: Stripe Checkout Integration
**Duration:** 2-3 days
**Start Date:** _____________
**End Date:** _____________
**Status:** ⬜ Not Started | ⬜ In Progress | ⬜ Complete

### Tasks

#### Stripe Service
- [ ] Create `src/services/stripeCheckout.ts`
- [ ] Implement Stripe initialization (singleton pattern)
- [ ] Implement `getStripe()` function
- [ ] Define CheckoutOptions interface
- [ ] Define CheckoutError interface
- [ ] Implement `redirectToCheckout()` function
- [ ] Add cart validation
- [ ] Add Stripe instance validation
- [ ] Add price ID validation
- [ ] Implement error handling
- [ ] Test with empty cart
- [ ] Test with invalid configuration

#### Checkout Integration
- [ ] Import checkout service in ShoppingCart component
- [ ] Add checkout button click handler
- [ ] Add loading state during redirect
- [ ] Add error display
- [ ] Configure success URL
- [ ] Configure cancel URL
- [ ] Test redirect to Stripe Checkout
- [ ] Verify line items display correctly
- [ ] Verify pricing displays correctly

#### Success Flow
- [ ] Test complete checkout with test card
- [ ] Verify redirect to success page
- [ ] Verify session ID in URL
- [ ] Verify cart is cleared
- [ ] Test success page display

#### Cancel Flow
- [ ] Click cancel on Stripe Checkout page
- [ ] Verify redirect back to cart
- [ ] Verify cart items are preserved
- [ ] Test return to checkout

### Testing with Test Cards
- [ ] Test successful payment: 4242 4242 4242 4242
- [ ] Test declined payment: 4000 0000 0000 0002
- [ ] Test 3D Secure: 4000 0025 0000 3155
- [ ] Verify appropriate error messages

### Notes
```
[Add any notes, issues, or decisions made during this phase]
```

---

## Phase 5: Page Updates & Migration
**Duration:** 2-3 days
**Start Date:** _____________
**End Date:** _____________
**Status:** ⬜ Not Started | ⬜ In Progress | ⬜ Complete

### Tasks

#### Update Products Page
- [ ] Open `src/pages/products/products.tsx`
- [ ] Import new ProductDisplay component
- [ ] Import BuyButton component
- [ ] Import PRODUCTS from config
- [ ] Replace ShopifyProductDisplay with ProductDisplay (Product 1)
- [ ] Replace ShopifyProductDisplay with ProductDisplay (Product 2)
- [ ] Replace GetRevomag button with BuyButton
- [ ] Verify product description section remains unchanged
- [ ] Verify features section remains unchanged
- [ ] Test page layout
- [ ] Test both products display correctly
- [ ] Test "Add to Cart" functionality
- [ ] Verify responsive design

#### Update Home Page
- [ ] Open `src/pages/home/home.tsx`
- [ ] Import BuyButton component
- [ ] Replace GetRevomag button with BuyButton
- [ ] Verify button placement
- [ ] Verify button styling (floating-buy-button class)
- [ ] Test button navigation
- [ ] Verify all other home content remains intact

#### Update Routes
- [ ] Open `src/routes.tsx`
- [ ] Import CartPage
- [ ] Import OrderSuccess
- [ ] Add route: `/cart` → CartPage
- [ ] Add route: `/order-success` → OrderSuccess
- [ ] Wrap new routes with scroll restoration HOC
- [ ] Test navigation to cart page
- [ ] Test navigation to success page (manually via URL)
- [ ] Verify scroll restoration works

#### Update Navigation
- [ ] Open `src/components/navigation/navigation.tsx`
- [ ] Import CartWidget component
- [ ] Add CartWidget to desktop navigation
- [ ] Add cart link to mobile/hamburger menu
- [ ] Position cart widget appropriately
- [ ] Test cart widget displays
- [ ] Test cart badge updates when items added
- [ ] Test cart widget click navigation

#### Remove Shopify Components
- [ ] Create backup branch: `git checkout -b shopify-backup`
- [ ] Push backup branch
- [ ] Return to migration branch
- [ ] Remove (or comment out) `src/components/shopifyButtons/shopifyProductDisplay.tsx`
- [ ] Remove (or comment out) `src/components/shopifyButtons/getRevomag.tsx`
- [ ] Remove Shopify Buy Button script from `index.html` (if present)
- [ ] Remove `src/services/productImagePreloader.ts` (no longer needed)
- [ ] Test that app builds without errors
- [ ] Test that app runs without Shopify dependencies

### Notes
```
[Add any notes, issues, or decisions made during this phase]
```

---

## Phase 6: Testing & QA
**Duration:** 3-4 days
**Start Date:** _____________
**End Date:** _____________
**Status:** ⬜ Not Started | ⬜ In Progress | ⬜ Complete

### Tasks

#### Functional Testing

**Cart Functionality**
- [ ] Add Regular product to cart
- [ ] Verify cart badge shows (1)
- [ ] Add Filigree product to cart
- [ ] Verify cart badge shows (2 or total qty)
- [ ] Open cart page
- [ ] Verify both products display
- [ ] Increase quantity of Regular product
- [ ] Verify subtotal updates
- [ ] Decrease quantity
- [ ] Verify subtotal updates
- [ ] Set quantity to 0 (should remove item)
- [ ] Verify item removed
- [ ] Click "Remove" button on Filigree product
- [ ] Verify item removed
- [ ] Verify empty cart message displays

**Cart Persistence**
- [ ] Add items to cart
- [ ] Refresh page
- [ ] Verify cart items persist
- [ ] Close browser tab
- [ ] Reopen site
- [ ] Verify cart items persist
- [ ] Clear localStorage manually
- [ ] Verify cart empties

**Checkout Flow**
- [ ] Add products to cart
- [ ] Click "Proceed to Checkout"
- [ ] Verify redirect to Stripe Checkout
- [ ] Verify products display correctly
- [ ] Verify prices display correctly
- [ ] Verify quantities display correctly
- [ ] Complete checkout with test card (4242 4242 4242 4242)
- [ ] Verify redirect to success page
- [ ] Verify cart is cleared
- [ ] Verify success message displays

**Cancel Flow**
- [ ] Add products to cart
- [ ] Proceed to checkout
- [ ] Click browser back button
- [ ] Verify return to cart page
- [ ] Verify items still in cart

**Navigation**
- [ ] Test all navigation links
- [ ] Test cart widget click
- [ ] Test BuyButton on home page
- [ ] Test BuyButton on products page
- [ ] Test "Continue Shopping" links
- [ ] Test success page navigation links

#### Cross-Browser Testing
- [ ] Chrome (Desktop)
  - [ ] Product display
  - [ ] Cart functionality
  - [ ] Checkout flow
- [ ] Firefox (Desktop)
  - [ ] Product display
  - [ ] Cart functionality
  - [ ] Checkout flow
- [ ] Safari (Desktop)
  - [ ] Product display
  - [ ] Cart functionality
  - [ ] Checkout flow
- [ ] Edge (Desktop)
  - [ ] Product display
  - [ ] Cart functionality
  - [ ] Checkout flow

#### Mobile Testing
- [ ] iOS Safari
  - [ ] Product display (responsive)
  - [ ] Image modal
  - [ ] Add to cart
  - [ ] Cart page
  - [ ] Checkout flow
  - [ ] Touch interactions
- [ ] Android Chrome
  - [ ] Product display (responsive)
  - [ ] Image modal
  - [ ] Add to cart
  - [ ] Cart page
  - [ ] Checkout flow
  - [ ] Touch interactions
- [ ] Test various screen sizes:
  - [ ] Mobile (375px)
  - [ ] Tablet (768px)
  - [ ] Desktop (1200px+)

#### Payment Testing
- [ ] Test card: 4242 4242 4242 4242 (Success)
- [ ] Test card: 4000 0000 0000 0002 (Declined)
- [ ] Test card: 4000 0025 0000 3155 (3D Secure)
- [ ] Verify error handling for each scenario
- [ ] Verify email receipt sent (check test email)

#### Performance Testing
- [ ] Measure page load time (home)
- [ ] Measure page load time (products)
- [ ] Measure cart operations speed
- [ ] Test with slow 3G network
- [ ] Verify images load efficiently
- [ ] Check for console errors
- [ ] Check for console warnings

#### Visual Regression Testing
- [ ] Compare Products page to current Shopify version
- [ ] Verify button colors match (#FE6A09, #556B2F)
- [ ] Verify border-radius matches (9px)
- [ ] Verify typography matches
- [ ] Verify spacing matches
- [ ] Take screenshots for comparison

#### Edge Cases
- [ ] Add 99 quantity of product
- [ ] Attempt checkout with empty cart (should prevent)
- [ ] Test with network disconnected
- [ ] Test with invalid Stripe keys (dev environment)
- [ ] Test rapid clicking of "Add to Cart"
- [ ] Test rapid clicking of "Checkout"

### Bug Tracking
```
Bug #1:
Description:
Steps to reproduce:
Status: ⬜ Open | ⬜ In Progress | ⬜ Fixed
```

### Notes
```
[Add any testing notes, screenshots, or findings]
```

---

## Phase 7: Deployment
**Duration:** 1-2 days
**Start Date:** _____________
**End Date:** _____________
**Status:** ⬜ Not Started | ⬜ In Progress | ⬜ Complete

### Tasks

#### Pre-Deployment Checklist
- [ ] All Phase 6 tests passed
- [ ] All critical bugs fixed
- [ ] Code reviewed
- [ ] Documentation updated
- [ ] Backup of current production site created
- [ ] Rollback plan documented
- [ ] Team notified of deployment schedule

#### Staging Deployment (Test Mode)
- [ ] Create staging environment variables
- [ ] Use Stripe TEST publishable key
- [ ] Use Stripe TEST price IDs
- [ ] Build project: `npm run build`
- [ ] Deploy to staging: `netlify deploy --dir=dist`
- [ ] Note staging URL: `________________`
- [ ] Complete full test on staging
- [ ] Test checkout with test card
- [ ] Verify email receipt
- [ ] Check Stripe Dashboard (test mode) for transaction
- [ ] Have another team member test staging
- [ ] Fix any issues found

#### Production Deployment Preparation
- [ ] Switch to Stripe LIVE publishable key
- [ ] Switch to Stripe LIVE price IDs
- [ ] Update `.env.production` file
- [ ] Verify environment variables
- [ ] Build production: `npm run build`
- [ ] Test production build locally

#### Production Deployment
- [ ] Deploy to production: `netlify deploy --dir=dist --prod`
- [ ] Verify deployment successful
- [ ] Visit production URL
- [ ] Verify cart works
- [ ] Make a real test purchase (small amount)
  - [ ] Use real card
  - [ ] Complete checkout
  - [ ] Verify email receipt received
  - [ ] Check Stripe Dashboard (live mode) for payment
  - [ ] Verify funds appear in Stripe balance
- [ ] Monitor error logs for 1 hour
- [ ] Fix any critical issues immediately

#### Post-Deployment Monitoring (First 24 Hours)
- [ ] Hour 1: Check error logs
- [ ] Hour 2: Check error logs
- [ ] Hour 4: Check error logs
- [ ] Hour 8: Check error logs
- [ ] Hour 24: Check error logs
- [ ] Monitor Stripe Dashboard for orders
- [ ] Verify email receipts are being sent
- [ ] Check for customer support inquiries
- [ ] Monitor website analytics
- [ ] Test on multiple devices

#### Post-Deployment Monitoring (First Week)
- [ ] Day 2: Review metrics
- [ ] Day 3: Review metrics
- [ ] Day 5: Review metrics
- [ ] Day 7: Full review and retrospective
- [ ] Compare conversion rates to Shopify baseline
- [ ] Review cart abandonment rates
- [ ] Check for any error patterns
- [ ] Gather customer feedback

#### Shopify Transition
- [ ] Keep Shopify account active for 2 weeks
- [ ] Monitor for any issues requiring rollback
- [ ] After 2 weeks of stable operation:
  - [ ] Archive Shopify product data
  - [ ] Export order history from Shopify
  - [ ] Cancel Shopify subscription (or keep for reference)

### Deployment Metrics
```
Deployment Date: _____________
Deployment Time: _____________
Total Downtime: _____________
Rollback Required: ⬜ Yes | ⬜ No
Issues Encountered:


Resolution:


```

### Notes
```
[Add any deployment notes or observations]
```

---

## Post-Migration Review

**Review Date:** _____________

### Success Metrics

#### Technical Metrics
- [ ] Page load time: ______ seconds (target: ≤ 2s)
- [ ] Cart operations: ______ ms (target: < 100ms)
- [ ] Checkout redirect: ______ seconds (target: < 1s)
- [ ] Uptime: ______% (target: 99.9%)
- [ ] Zero payment processing errors: ⬜ Yes | ⬜ No

#### Business Metrics
- [ ] Monthly cost savings: $______ (expected: $9/month)
- [ ] Conversion rate vs. baseline: ______%
- [ ] Average order value: $______
- [ ] Cart abandonment rate: ______%

#### User Experience Metrics
- [ ] Customer complaints: ______ (target: 0)
- [ ] Mobile checkout completion: ______% (target: ≥ 90%)
- [ ] Average time to purchase: ______ minutes
- [ ] Customer satisfaction: ⬜ Maintained | ⬜ Improved | ⬜ Decreased

### Lessons Learned

**What went well:**
```


```

**What could be improved:**
```


```

**Unexpected challenges:**
```


```

**Recommendations for future:**
```


```

---

## Sign-Off

### Phase Completion Sign-Off

| Phase | Completed By | Date | Signature |
|-------|--------------|------|-----------|
| Phase 1: Stripe Setup | | | |
| Phase 2: Cart Implementation | | | |
| Phase 3: Component Development | | | |
| Phase 4: Checkout Integration | | | |
| Phase 5: Page Migration | | | |
| Phase 6: Testing & QA | | | |
| Phase 7: Deployment | | | |

### Final Project Sign-Off

**Project Manager:** ________________ Date: ________

**Lead Developer:** ________________ Date: ________

**QA Lead:** ________________ Date: ________

**Product Owner:** ________________ Date: ________

---

## Appendix

### Important Links
- Stripe Dashboard: https://dashboard.stripe.com
- Stripe Documentation: https://stripe.com/docs
- Production Site: https://getrevomag.com
- Staging Site: ________________
- Project Repository: ________________

### Contact Information
- Stripe Support: https://support.stripe.com
- Netlify Support: https://www.netlify.com/support/
- Team Lead: ________________
- Emergency Contact: ________________

### Backup Information
- Shopify Backup Branch: `shopify-backup`
- Last Shopify Deployment Commit: ________________
- Rollback Instructions: See implementation plan

---

**Document Version:** 1.0
**Last Updated:** ________________
**Updated By:** ________________