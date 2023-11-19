import {ReactElement} from "react";
import Navigation from "../../../components/navigation/navigation";
import Banner from "../../../components/banner/banner";
import Footer from "../../../components/footer/footer";
import BeachPano from "../../../assets/BeachPano.jpg";
import Headshot from "../../../assets/NicoleHeadshot.jpg";
import './snoringAndSleepApnea.scss';

/**
 * Renders Mouth Breathing page
 * @constructor
 */
export default function SnoringAndSleepApnea(): ReactElement {
    return (
        <div className={'snoring-apnea-content'}>
            <Navigation/>
            <Banner imageSrc={BeachPano} imageAlt={'beach pano'} message={'Snoring And Sleep Apnea'}/>
            <section className={'snoring-apnea-content-container'}>
                <h2>SNORING AND SLEEP APNEA</h2>
                <div className={"snoring-apnea-image1-container"}>
                    <img id={'snoring-apnea-image1'} src={Headshot} alt={"nicole headshot"}/>
                </div>
                <p>Millions of people suffer from a severe lack of quality sleep. Sleep disruption can come from a variety of causes. One of the most serious conditions that can cause it is a medical disorder caused by your tongue as it blocks your airway while you sleep. The type of blockage is called obstructive sleep apnea (OSA). In the U.S. approximately 6 million people have been diagnosed with sleep apnea and it is estimated that 23 million people are suffering from the effects of OSA without being diagnosed.</p>
                <p>When the muscles in your throat, soft palate and tongue do not function properly, your tongue drops to the back of your airway while you sleep. If the tongue causes a partial blockage, the vibrations of the tongue tissue against your airway cause a snoring sound. If the tongue blocks your airway completely, you cannot breathe and your body reflexes cause you to grind your teeth, partially wake up, toss and turn and gasp for air in an attempt to open up your airway to get oxygen.</p>
                <p>Traditionally, we have thought of overweight men to be at a higher risk for sleep apnea. However, we now know that young children, women, teens and even physically fit individuals can have this condition.</p>
                <p>Treatment for sleep apnea includes C-PAP/A-PAPs, oral sleep appliances and surgeries in some cases.</p>
                <p style={{fontStyle: "italic"}}> **Current literature demonstrates that myofunctional therapy decreases apnea-hypopnea index (AHI) by approximately 50% in adults and 62% in children.</p>
                <p>Untreated obstructive sleep apnea is a life altering disease. It has been shown to increase risk and severity of heart disease, high blood pressure, heart attacks, cardiac arrhythmias, sexual dysfunction, diabetes, stroke and other chronic health conditions. OSA results in your body being unable to enter REM sleep which leads to daytime sleepiness, chronic fatigue, short term memory loss, early onset dementia and personality disturbances. Children with sleep disordered breathing are often misdiagnosed with ADHD.</p>
                <h3>How can Myofunctional Therapy help?</h3>
                <p>The overarching goal of myofunctional therapy is to improve airway health. We do this by improving tone of the muscles of the tongue and airway. Current literature demonstrates that myofunctional therapy decreases apnea-hypopnea index (AHI) by approximately 50% in adults and 62% in children. Myofunctional therapy can also serve as an adjunct to other OSA treatments.</p>
                <p>Orofacial Myofunctional therapy (OMT) is beneficial for both children and adults who snore or have been diagnosed with obstructive sleep apnea. It is especially beneficial for children who are showing beginning signs of sleep disordered breathing, like snoring or sleeping with an open mouth posture while breathing through the mouth. During formative years, OMT has been shown to guide palatal and craniofacial growth and possibly prevent serious sleep disordered breathing, like OSA, in adulthood.</p>
            </section>
            <Footer/>
        </div>
    );
}
