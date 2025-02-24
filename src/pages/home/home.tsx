import {ReactElement} from "react";
import Navigation from "../../components/navigation/navigation";
import './home.scss';
import Hero from "../../assets/bannerImages/RevomagWEBBanner.jpg";
import Fast from "../../assets/icons/FastLoading.png";
import Made from "../../assets/icons/MadeInMA.png";
import Guaranteed from "../../assets/icons/Guarantee.png";
import Free from "../../assets/icons/FreeShipping.png";

/**
 * Renders home page
 * @constructor
 */
export default function Home(): ReactElement {
    return (
        <>
            <Navigation/>
            <div className={'landing-banner-area'}>
                <div className={'hero-image-container'}>
                    <img src={Hero} alt={'revomag'} title={'revomag'} />
                </div>
            </div>
            <div className={'home-content'}>
                <div className={'home-video'}>
                    <iframe
                        src="https://www.youtube.com/embed/VHS8xIsR9XY?si=qfZiU_Mn5mW_EDwM&rel=0&modestbranding=1&controls=1&showinfo=0"
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    />
                </div>
                <div className={'home-mission'}>
                    <p>
                        At Revomag, we are dedicated to providing revolver owners with a faster and more concealable reloading solution for everyday carry and personal protection. Our innovative magazine-style reloader is designed to be fast to draw and easy to carry, offering an edge when seconds matter. Our mission is to equip individuals with a reliable and effective reload that prioritize safety, speed, and strength.
                    </p>
                </div>
            </div>
            <div className={"home-icons"}>
                <div className={"icon-container"}>
                    <img src={Fast} alt={"fast loading"}/>
                    <p>FAST LOADING</p>
                </div>
                <div className={"icon-container"}>
                    <img src={Free} alt={"free shipping"}/>
                    <p>FREE SHIPPING</p>
                </div>
                <div className={"icon-container"}>
                    <img src={Made} alt={"made in massachusetts"}/>
                    <p>MADE IN MASSACHUSETTS</p>
                </div>
                <div className={"icon-container"}>
                    <img src={Guaranteed} alt={"guaranteed for life"}/>
                    <p>GUARANTEED FOR LIFE</p>
                </div>
            </div>
        </>
    );
}
