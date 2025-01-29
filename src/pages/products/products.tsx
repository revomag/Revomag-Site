import {ReactElement} from "react";
import Navigation from "../../components/navigation/navigation";
import Banner from "../../components/banner/banner";
import Hero from "../../assets/bannerImages/RevomagLoading.jpg"
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
            {/*<div className={'availability'}>*/}
            {/*    <h2>Please note that our next available shipment date is January 29th. Any orders received prior to that date will be fulfilled on 1/29. Thank you for your patience and support!</h2>*/}
            {/*</div>*/}
            <div id={'button container'} className={'shopify-info'}>
                <BuyRevomagFullDescriptionButton/>
            </div>
        </>
    );
}
