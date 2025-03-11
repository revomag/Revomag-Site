import {ReactElement} from "react";
import Navigation from "../../components/navigation/navigation";
import Banner from "../../components/banner/banner";
import Hero from "../../assets/bannerImages/RevomagLoading.jpg"
import './products.scss';
import BuyRevomagFullDescriptionButton from "../../components/shopifyButtons/buyRevomagFullDescription";
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
            <div id={'button container'} className={'shopify-info'}>
                <BuyRevomagFullDescriptionButton/>
                <div className={'product-features'}>
                    <h2>Features:</h2>
                    <ul>
                        <li>
                            <span>Secure Grip:</span> Textured stippling provides enhanced grip, ensuring steady handling even in challenging conditions.
                        </li>
                        <li>
                            Durable Construction: Made from tough nylon for long-lasting performance.
                        </li>
                        <li>
                            Smooth &amp; Snag-Free: The clip has a rounded end which is snag free and ensures comfort and ease of use. It also has a flat black Cerakote finish which adds resilience.
                        </li>
                        <li>
                            Ambidextrous Design: Perfect for both left and right-handed users, offering flexibility and ease of use for everyone.
                        </li>
                        <li>
                            Versatile Carry: Can be carried in the pocket or inside the waistband which provide comfortable and discreet options for everyday carry.
                        </li>
                        <li>
                            Self-Defense Ready: The point at the top is a SMACK CAP or striking surface. This offers an effective less-than-lethal force option when needed.
                        </li>
                        <li>
                            Efficient Capacity: Holds eight 38 special, nine 327 mag, or six-seven 357 hollow point, ensuring you’re always prepared.
                        </li>
                        <li>
                            357 Mag Compatible: Loads must not exceed 1.54 inches or 39.11mm in length. See <a href={'/resources'}>Frequently Asked Questions</a> for additional information.
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
            </div>
        </>
    );
}
