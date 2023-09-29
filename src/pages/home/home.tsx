import React, { ReactElement } from "react";
import NavBar from "../../components/navBar/navBar";
import Footer from "../../components/footer/footer";
import Banner from "../../components/banner/banner";
import './home.scss';
import SBPano from '../../assets/SBPano.jpg';

/**
 * Renders home page
 * @constructor
 */
export default function Home(): ReactElement {
    return (
        <>
            <NavBar />
            <Banner
                imageSrc={SBPano}
                imageAlt={'Santa Barbara cityscape'}
                message={'ORAL MYOFUNCTIONAL THERAPY'}
            />
            <div className={'location-info'}>
                <p>
                    Oral Myofunctional Therapy in the Santa Barbara region of the California Central Coast serving
                    communities of Montecito, Santa Barbara, Goleta, Summerland, Carpinteria, Solvang, Santa Ynez, and surrounding communities.
                </p>
            </div>
            <div className={'myo-info'}>
                <p>
                    Oral myofunctional therapy targets the oral motor muscles used to chew and swallow.
                    Myofunctional therapy is used to treat a variety of disorders including:
                    tongue tie, tongue thrust, incorrect tongue position, low tongue posture, open mouth posture,
                    thumb sucking, finger sucking, nail biting, clenching/grinding, TMJ pain, temporomandibular joint
                    disorder (TMD), snoring and sleep apnea.
                    <br/><br/>
                    Therapy utilizes exercises, awareness and reduction of muscle compensation with the overarching
                    goal to correct improper muscle movements to restore proper function.
                </p>
            </div>
            <Footer/>
        </>
    );
}
