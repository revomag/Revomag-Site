import RevomagLoadingBanner from '../assets/bannerImages/RevomagLoading.jpg';

export interface Product {
    slug: string;
    name: string;
    shopifyProductId: string;
    shortDescription: string;
    uniqueDescription: string[];
    bannerImage: string;
    isActive: boolean;
    sortOrder: number;
}

export const SHARED_DESCRIPTION = `Revomag is the original revolver mag. It is a revolver reloader that is designed to always be with you for personal protection. Fast to draw and easy to carry, Revomag is not at the bottom of your pocket or in a bulky pouch. It is faster than a speed strip, and more concealable than speed loader making it an easy choice for your every day carry. We stand by our patented technology and are proud to say that every piece of the Revomag is made in the USA.`;

export const WHATS_IN_THE_BOX = `Included with the <span>Revomag</span> is a <span>Practice Cylinder</span> for muscle memory development and a <span>Hex L-Key</span> to disassembly for cleaning.`;

export const FEATURES = [
    {
        title: 'Secure Grip:',
        description: 'Textured stippling provides enhanced grip, ensuring steady handling even in challenging conditions.',
    },
    {
        title: null,
        description: 'Durable Construction: Made from tough nylon for long-lasting performance.',
    },
    {
        title: null,
        description: 'Smooth & Snag-Free: The clip has a rounded end which is snag free and ensures comfort and ease of use. It also has a flat black Cerakote finish which adds resilience.',
    },
    {
        title: null,
        description: 'Ambidextrous Design: Perfect for both left and right-handed users, offering flexibility and ease of use for everyone.',
    },
    {
        title: null,
        description: 'Versatile Carry: Can be carried in the pocket or inside the waistband which provide comfortable and discreet options for everyday carry.',
    },
    {
        title: null,
        description: 'Self-Defense Ready: The point at the top is a SMACK CAP or striking surface. This offers an effective less-than-lethal force option when needed.',
    },
    {
        title: null,
        description: 'Efficient Capacity: Holds eight 38 special or 357 magnum, or nine 327 mag, ensuring you\'re always prepared. (357 has limited compatibility. Cartridges must not exceed 1.54 inches or 39.11mm in length. See <a href="/resources">Frequently Asked Questions</a> for additional information.)',
    },
    {
        title: null,
        description: 'Safer Storage: Reduces lead exposure by 87% when compared to an 8 cartridge speed strip. This makes pocket storage cleaner and safer.',
    },
    {
        title: null,
        description: 'Build Muscle Memory: Includes a practice cylinder to help you develop the necessary skills and confidence for quick and accurate reloading.',
    },
    {
        title: null,
        description: 'Easy Maintenance: Comes with a hex L-key to disassemble for cleaning and to swap the belt clip for left-handed users.',
    },
];

const products: Product[] = [
    {
        slug: 'revomag',
        name: 'Revomag',
        shopifyProductId: '9487266677046',
        shortDescription: 'The original revolver mag. Fast to draw, easy to carry.',
        uniqueDescription: [],
        bannerImage: RevomagLoadingBanner,
        isActive: true,
        sortOrder: 1,
    },
    {
        slug: 'filigree',
        name: 'Revomag Filigree',
        shopifyProductId: '10313165603126',
        shortDescription: 'Revomag with a filigree design.',
        uniqueDescription: [],
        bannerImage: RevomagLoadingBanner,
        isActive: true,
        sortOrder: 2,
    },
    {
        slug: 'pbd-tools-oss-limited-edition',
        name: 'Polite But Dangerous Tools OSS Limited Edition',
        shopifyProductId: '10611592331574',
        shortDescription: 'Limited edition collaboration with Polite But Dangerous Tools.',
        uniqueDescription: [],
        bannerImage: RevomagLoadingBanner,
        isActive: true,
        sortOrder: 3,
    },
];

export function getActiveProducts(): Product[] {
    return products
        .filter((p) => p.isActive)
        .sort((a, b) => a.sortOrder - b.sortOrder);
}

export function getProductBySlug(slug: string): Product | undefined {
    return products.find((p) => p.slug === slug);
}

export function getOtherProducts(currentSlug: string): Product[] {
    return getActiveProducts().filter((p) => p.slug !== currentSlug);
}

export function getAllProductIds(): string[] {
    return products
        .filter((p) => p.isActive && p.shopifyProductId)
        .map((p) => p.shopifyProductId);
}
