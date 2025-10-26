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
    price: 5999,
    stripePriceId: import.meta.env.VITE_STRIPE_PRICE_ID_REGULAR || '',
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
    price: 5999,
    stripePriceId: import.meta.env.VITE_STRIPE_PRICE_ID_FILIGREE || '',
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