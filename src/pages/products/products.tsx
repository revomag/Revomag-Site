import {ReactElement} from "react";
import Navigation from "../../components/navigation/navigation";
import Banner from "../../components/banner/banner";
import Hero from "../../assets/bannerImages/RevomagLoading.jpg"
import './products.scss';
import ShopifyProductDisplay from "../../components/shopifyButtons/shopifyProductDisplay";
import GetRevomagProductButton from "../../components/shopifyButtons/getRevomag";

/**
 * Renders the About page
 * @constructor
 */
export default function Products(): ReactElement {
    return (
        <>
            <Navigation/>
            <div id={'buy-now-button-container'}>
                <GetRevomagProductButton
                    buttonText={'Buy Revomag'}
                    className="floating-buy-button"
                />
            </div>
            <Banner
                imageSrc={Hero}
                imageAlt={'Revomag size in hand'}
                imageTitle={'Revomag size in hand'}
            />
            
            <div className={'products-container'}>
                <div className={'product-variant'}>
                    <ShopifyProductDisplay 
                        productId="9487266677046" 
                        showDescription={false}
                        showImages={true}
                    />
                </div>
                
                <div className={'product-variant'}>
                    <ShopifyProductDisplay 
                        productId="10313165603126" 
                        showDescription={false}
                        showImages={true}
                    />
                </div>
            </div>
            
            <div className={'product-description'}>
                <p>
                    Revomag is the original revolver mag. It is a revolver reloader that is designed to always be with you for personal protection. Fast to draw and easy to carry, Revomag is not at the bottom of your pocket or in a bulky pouch. It is faster than a speed strip, and more concealable than speed loader making it an easy choice for your every day carry. We stand by our patented technology and are proud to say that every piece of the Revomag is made in the USA.
                </p>
                <h3>What's in the Box?</h3>
                <p>
                    Included with the <span>Revomag</span> is a <span>Practice Cylinder</span> for muscle memory development and a <span>Hex L-Key</span> to disassembly for cleaning.
                </p>
            </div>
            
            <div className={'product-features'}>
                <h2>Features:</h2>
                <ul>
                    <li>
                        <span>Secure Grip:</span> Custom laser engraving enhances grip, ensuring steady handling even in challenging conditions.
                    </li>
                    <li>
                        Durable Construction: Made from tough nylon for long-lasting performance.
                    </li>
                    <li>
                        Smooth &amp; Snag-Free: The clip has a rounded end which is snag free and ensures comfort and ease of use.
                    </li>
                    <li>
                        Ambidextrous Design: Perfect for both left and right-handed users, offering flexibility and ease of use for everyone.
                    </li>
                    <li>
                        Efficient Capacity: Holds eight 38 special, eight 357 magnum, nine 327 magnum or 32 H&R magnum, ensuring you're always prepared.
                    </li>
                    <li>
                        Safer Storage: Reduces lead exposure by 87% when compared to an 8 cartridge speed strip. This makes pocket storage cleaner and safer.
                    </li>
                    <li>
                        Build Muscle Memory: Includes a practice cylinder to help you develop the necessary skills and confidence for quick and accurate reloading.
                    </li>
                    <li>
                        Easy Maintenance: Comes with a hex L-key to disassemble for cleaning and to swap the belt clip for left-handed users.
                    </li>
                </ul>
            </div>
        </>
    );
}
