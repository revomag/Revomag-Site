import {ReactElement} from "react";
import Navigation from "../../components/navigation/navigation";
import HeroVideo from "../../assets/bannerImages/HeroVideo.mp4";
import './home.scss';
import Hero from "../../assets/bannerImages/RevomagWEBBanner.jpg";
import Fast from "../../assets/icons/FastLoading.png";
import Made from "../../assets/icons/MadeInMA.png";
import Guaranteed from "../../assets/icons/Guarantee.png";
import Free from "../../assets/icons/FreeShipping.png";
import VideoModal from "../../components/VideoModal/VideoModal";

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
                <div className={'video-modal-button-wrapper'}>
                    <VideoModal
                        videoId={"VHS8xIsR9XY"}
                        text={'View Promotional Video'}
                        baseClassName={'revomag-promo-button'}
                        displayType={'button'}
                    />
                </div>
            </div>
            <div className="banner-video-container">
                <video autoPlay loop muted playsInline>
                    <source src={HeroVideo} type="video/mp4"/>
                </video>
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
