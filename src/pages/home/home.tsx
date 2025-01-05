import {ReactElement} from "react";
import Navigation from "../../components/navigation/navigation";
import HeroVideo from "../../assets/bannerImages/HeroVideo.mp4";
import './home.scss';
import Hero from "../../assets/bannerImages/RevomagWEBBanner.jpg";
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
            </div>
            <div className="banner-video-container">
                <video autoPlay loop muted playsInline>
                    <source src={HeroVideo} type="video/mp4"/>
                </video>
            </div>
            <section className={'home-content'}>
                {/*<div className={'revomag-info'}>*/}
                {/*    <SimpleButton buttonText={"Promotional Video"} destination={'/'}/>*/}
                {/*</div>*/}
                <VideoModal
                    videoId={"VHS8xIsR9XY"}
                    buttonText={'View Promotional Video'}
                    buttonClassName={'revomag-promo-button'}
                />
            </section>
        </>
    );
}
