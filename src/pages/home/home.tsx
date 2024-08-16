import {ReactElement} from "react";
import Navigation from "../../components/navigation/navigation";
import HeroVideo from "../../assets/bannerImages/HeroVideo.mp4";
import './home.scss';
import SimpleButton from "../../components/simpleButton/simpleButton";

/**
 * Renders home page
 * @constructor
 */
export default function Home(): ReactElement {
    return (
        <>
            <Navigation/>
            <div className="banner-video-container">
                <video autoPlay loop muted playsInline>
                    <source src={HeroVideo} type="video/mp4"/>
                </video>
            </div>
            <section className={'home-content'}>
                <div className={'revomag-info'}>
                    <SimpleButton buttonText={"Promotional Video"} destination={'/'}/>
                </div>
            </section>
        </>
    );
}
