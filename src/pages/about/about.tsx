import {ReactElement} from "react";
import Navigation from "../../components/navigation/navigation";
import Banner from "../../components/banner/banner";
import Building from "../../assets/bannerImages/WorkingOn.png"
import Headshot from "../../assets/DaveHeadshot.jpg";
import './about.scss';

/**
 * Renders the About page
 * @constructor
 */
export default function About(): ReactElement {
    return (
        <>
            <Navigation/>
            <Banner
                imageSrc={Building}
                imageAlt={'manufacturing revomag'}
                imageTitle={'manufacturing revomag'}
            />
            <h1>About Dave</h1>
            <div className={"about-content-container"}>
                <div className={"about-content"}>
                    <div>
                        <p>I am a Christ follower, husband, father of three, and a blue collar auto body technician.
                            I grew up in  the country of Colorado, hunting, fishing, camping, and working with my hands.
                            I believe in freedom, the second amendment, personal responsibility, and protecting all that
                            you hold dear.</p>
                        <p> I set out to build a revolver reload that was faster than a speedstrip and more concealable
                            than a speedloader. A reload that was not at the bottom of a pocket or in a bulky pouch.
                            Revomag is that revolver reload.
                            It was forged through many years of discovery and hard work.</p>
                        <p>What started out as a vision, became a reality, a patent, and then a business venture.
                            Revomag is the original revolver mag. Proudly made in the USA.</p>
                    </div>
                </div>
                <div className={"about-image-container"}>
                    <img
                        id={'headshot-image'}
                        src={Headshot}
                        alt={"dave headshot"}
                        title={'Dave Robison, inventor of revomag'}
                        loading={'lazy'}
                    />
                </div>
            </div>
        </>
    );
}
