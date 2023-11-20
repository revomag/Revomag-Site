import {ReactElement} from "react";
import Navigation from "../../../components/navigation/navigation";
import Banner from "../../../components/banner/banner";
import Footer from "../../../components/footer/footer";
import BeachPano from "../../../assets/BeachPano.jpg";
import Headshot from "../../../assets/NicoleHeadshot.jpg";
import './adhdAndSleepDisorderedBreathing.scss';

/**
 * Renders Mouth Breathing page
 * @constructor
 */
export default function AdhdAndSleepDisorderedBreathing(): ReactElement {
    return (
        <div className={'adhd-and-sleep-disordered-breathing-content'}>
            <Navigation/>
            <Banner
                imageSrc={BeachPano}
                imageAlt={'beach pano'}
                message={'ADHD and Sleep Disordered Breathing'}
            />
            <section className={'adhd-and-sleep-disordered-breathing-content-container'}>
                <h2>Children with Sleep Disordered Breathing (SDB) and ADHD</h2>
                <div className={"adhd-and-sleep-disordered-breathing-image1-container"}>
                    <img id={'adhd-and-sleep-disordered-breathing-image1'} src={Headshot} alt={"nicole headshot"}/>
                </div>
                <p>Children with sleep disorders are often inattentive or hyperactive, and some carry a diagnosis of attention deficit/hyperactivity disorder (ADHD) until their sleep disorder is detected.</p>
                <p>Mouth breathing activates a fight or flight sympathetic state of your nervous system, whereas nasal breathing activates the parasympathetic response. The sympathetic nervous system is best know for it’s role in responding to dangerous or stressful situations. When activated, it speeds up your heart rate to deliver more blood to areas of your body that need more oxygen to get you out of danger.</p>
                <p>At night, when your body is constantly in this state, you are physically unable to enter into deep sleep, which is the restorative and regenerative sleep that we all need. So while a child may be getting the correct “quantity” of sleep, they are not getting “quality” sleep. Additionally, mouth breathers get 18% less oxygen compared to someone who breaths through their nose. These two factors combined will have detrimental affects to a child’s growing body, including but not limited to, hormone health, physical growth (whole body and musculoskeletal growth) and mental/development growth.</p>
                <p>Every child should be screened and assessed for sleep disordered breathing, especially any child that has ADHD symptoms or diagnosis.</p>
                <div className={"adhd-and-sleep-disordered-breathing-image2-container"}>
                    <img id={'adhd-and-sleep-disordered-breathing-image2'} src={Headshot} alt={"nicole headshot"}/>
                </div>
                <h3>Resources:</h3>
                <ol>
                    <li>
                        <a href={'https://pubmed.ncbi.nlm.nih.gov/34934269/'}>
                            Sleep Difficulties and Symptoms of Attention-deficit Hyperactivity Disorder in Children with Mouth Breathing
                        </a>
                    </li>
                    <li>
                        <a href={'https://pubmed.ncbi.nlm.nih.gov/9493930/'}>
                            Symptoms of sleep disorders, inattention, and hyperactivity in children
                        </a>
                    </li>
                </ol>
            </section>
            <Footer/>
        </div>
    );
}
