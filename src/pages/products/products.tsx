import {ReactElement} from "react";
import Navigation from "../../components/navigation/navigation";
import Banner from "../../components/banner/banner";
import Hero from "../../assets/bannerImages/revomagHands.jpg"
import './products.scss';
import BuyRevomagFullDescriptionButton from "../../components/shopifyButtons/buyRevomagFullDescription";

/**
 * Renders the About page
 * @constructor
 */
export default function Products(): ReactElement {
    return (
        <>
            <Navigation/>
            <Banner
                imageSrc={Hero}
                imageAlt={'Revomag size in hand'}
                imageTitle={'Revomag size in hand'}
            />
            <div id={'button container'}>
                <BuyRevomagFullDescriptionButton/>
            </div>
        </>
    );
}
