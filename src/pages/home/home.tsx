import {ReactElement, useEffect, useMemo, useState} from "react";
import Navigation from "../../components/navigation/navigation";
import Banner from "../../components/banner/banner";
import BannerImageOne from "../../assets/bannerImages/sbHomeImage1.jpeg";
import BannerImageTwo from "../../assets/bannerImages/sbHomeImage2.jpeg";
import BannerImageThree from "../../assets/bannerImages/sbHomeImage3.jpeg";
import BannerImageFour from "../../assets/bannerImages/sbHomeImage4.jpeg";
import BannerImageFive from "../../assets/bannerImages/sbHomeImage5.jpeg";
import './home.scss';

/**
 * Renders home page
 * @constructor
 */
export default function Home(): ReactElement {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [bannerImage, setBannerImage] = useState(BannerImageOne);
    const imageBanner = <Banner
        className={'image-fade'}
        imageSrc={bannerImage}
        imageAlt={'image slider'}
        imageTitle={'Santa Barbara California Scenery'}
    />;

    const bannerImageArray = useMemo(() =>
        [
            BannerImageOne,
            BannerImageTwo,
            BannerImageThree,
            BannerImageFour,
            BannerImageFive
        ], []
    );

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % bannerImageArray.length);
        }, 7000);

        setBannerImage(bannerImageArray[currentImageIndex]);

        return () => clearInterval(intervalId); // Cleanup on component unmount

    }, [bannerImageArray, bannerImageArray.length, currentImageIndex]); // Run this effect once on mount

    return (
        <>
            <Navigation/>
            {imageBanner}
            <section className={'home-content'}>
                <div className={'location-info'}>
                    <p>
                        Oral Myofunctional Therapy in the Santa Barbara region of the California Central Coast serving Montecito, Santa Barbara, Goleta, Summerland, Carpinteria, Solvang, Santa Ynez, and surrounding communities.
                    </p>
                </div>
                <div className={'myo-info'}>
                    <h2>What is Myofunctional Therapy?</h2>
                    <p>Orofacial "mouth and face" myofunctional "muscle function" therapy (OMT) is a neuromuscular re-education of the oral and facial muscles. It’s done through a series of tailored exercises, awareness and reduction of muscle compensations. The overarching goal is to restore normal function by correcting improper muscle movements, teaching correct chewing, swallowing and breathing patterns, and improving airway health.</p>
                    <h2>This therapy is used to manage a variety of disorders including:</h2>
                    <ul>
                        <li>Tongue tie</li>
                        <li>Tongue thrust</li>
                        <li>Low tongue posture/open mouth posture</li>
                        <li>Anterior open bite</li>
                        <li>Grinding and clenching</li>
                        <li>TMJ pain</li>
                        <li>Snoring/sleep apnea</li>
                        <li>Chronic headaches/neck pain</li>
                        <li>GERD</li>
                        <li>Chronic bloating/gas</li>
                        <li>Habit elimination such as thumb sucking/nail biting</li>
                        <li>Chronic fatigue/waking up tired</li>
                        <li>Anxiety</li>
                    </ul>
                    <p>These dysfunctions can significantly affect sleep quality, dentition, chewing, swallowing, speech and overall mental and physical health including hormone regulation, growth, attention span and more.</p><br/>
                    <p>Myofunctional therapy is for everyone, both children and adults. It is completely non-invasive and can be instrumental in re-training the muscles of the face and tongue that have been in dysfunction for years. Restoring normal function to the tongue and facial muscles can have full body benefits.</p>
                    <h2>Benefits of Myofunctional Therapy:</h2>
                    <ul>
                        <li>Improved airway health</li>
                        <li>Increased energy and alertness</li>
                        <li>Reduced clenching/grinding</li>
                        <li>Reduced TMJ pain and headaches</li>
                        <li>Decreased sleep apnea and snoring</li>
                        <li>Prevention of orthodontic relapse (teeth moving after braces)</li>
                        <li>Increasing tone and mobility of oral structures</li>
                        <li>Establishing symmetry to the face</li>
                    </ul>
                    <p className={"disclaimer italic"}>The information on this website is in no way considered to be medical advice and is in no way intended to treat, cure or prevent any disease, symptom or condition. Medical advice should be obtained from an appropriately qualified and licensed medical professional. Please consult with your doctor for any change in lifestyle.</p>
                </div>
            </section>
        </>
    );
}
