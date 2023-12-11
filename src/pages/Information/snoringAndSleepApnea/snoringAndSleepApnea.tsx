import {ReactElement} from "react";
import Navigation from "../../../components/navigation/navigation";
import Banner from "../../../components/banner/banner";
import SleepApneaCpap from "../../../assets/bannerImages/manUsingCpap.jpeg";
import Stanford from "../../../assets/mouthBreathing/Stanford Study.png";
import './snoringAndSleepApnea.scss';

/**
 * Renders Mouth Breathing page
 * @constructor
 */
export default function SnoringAndSleepApnea(): ReactElement {
    return (
        <div className={'snoring-apnea-content'}>
            <Navigation/>
            <Banner
                imageSrc={SleepApneaCpap}
                imageAlt={'Man using a cpap while sleeping'}
                imageTitle={'Man using a cpap while sleeping'}
            />
            <section className={'snoring-apnea-content-container'}>
                <h1>Snoring and Sleep Apnea</h1>
                <p>Millions of people suffer from a severe lack of quality sleep. Sleep disruption can come from a variety of causes. One of the most serious conditions that can cause it is a medical disorder caused by your tongue as it blocks your airway while you sleep. The type of blockage is called obstructive sleep apnea (OSA). In the U.S. approximately 6 million people have been diagnosed with sleep apnea and it is estimated that 23 million people are suffering from the effects of OSA without being diagnosed.</p>
                <p>When the muscles in your throat, soft palate and tongue do not function properly, your tongue drops to the back of your airway while you sleep. If the tongue causes a partial blockage, the vibrations of the tongue tissue against your airway cause a snoring sound. If the tongue blocks your airway completely, you cannot breathe and your body reflexes cause you to grind your teeth, partially wake up, toss and turn and gasp for air in an attempt to open up your airway to get oxygen.</p>
                <p>Traditionally, we have thought of overweight men to be at a higher risk for sleep apnea. However, we now know that young children, women, teens and even physically fit individuals can have this condition.</p>
                <p>Treatment for sleep apnea includes C-PAP/A-PAPs, oral sleep appliances and surgeries in some cases.</p>
                <p className={'italic'}> **Current literature demonstrates that myofunctional therapy decreases apnea-hypopnea index (AHI) by approximately 50% in adults and 62% in children.</p>
                <p>Untreated obstructive sleep apnea is a life altering disease. It has been shown to increase risk and severity of heart disease, high blood pressure, heart attacks, cardiac arrhythmias, sexual dysfunction, diabetes, stroke and other chronic health conditions. OSA results in your body being unable to enter REM sleep which leads to daytime sleepiness, chronic fatigue, short term memory loss, early onset dementia and personality disturbances. Children with sleep disordered breathing are often misdiagnosed with ADHD.</p>
                <h3>How can Myofunctional Therapy help?</h3>
                <p>The overarching goal of myofunctional therapy is to improve airway health. We do this by improving tone of the muscles of the tongue and airway. Current literature demonstrates that myofunctional therapy decreases apnea-hypopnea index (AHI) by approximately 50% in adults and 62% in children. Myofunctional therapy can also serve as an adjunct to other OSA treatments.</p>
                <div className={"snoring-image-container"}>
                    <img
                        id={'snoring-image'}
                        src={Stanford}
                        alt={"stanford study details"}
                        title={'Stanford study of myofuntional therapy use to treat obstructive sleep apnea'}
                        loading={'lazy'}
                    />
                </div>
                <p>Orofacial Myofunctional therapy (OMT) is beneficial for both children and adults who snore or have been diagnosed with obstructive sleep apnea. It is especially beneficial for children who are showing beginning signs of sleep disordered breathing, like snoring or sleeping with an open mouth posture while breathing through the mouth. During formative years, OMT has been shown to guide palatal and craniofacial growth and possibly prevent serious sleep disordered breathing, like OSA, in adulthood.</p>
                <h3>Additional Resources:</h3>
                <ul>
                    <li>
                        <a href={"https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4402674/"}>
                            Myofunctional Therapy to Treat Obstructive Sleep Apnea: A Systematic Review and Meta-analysis
                        </a>
                    </li>
                    <li>
                        <a href={"https://pubmed.ncbi.nlm.nih.gov/25950418/"}>
                            Effects of Oropharyngeal Exercises on Snoring: A Randomized Trial
                        </a>
                    </li>
                    <li>
                        <a href={"https://www.mdpi.com/1648-9144/57/4/323/htm"}>
                            Orofacial Myofunctional Therapy in Obstructive Sleep Apnea Syndrome: A Pathophysiological Perspective
                        </a>
                    </li>
                    <li>
                        <a href={"https://aomtinfo.org/wp-content/uploads/2016/06/Case-Report-UARS-Myofunctional-Therapy-12.2015-Correa.pdf"}>
                            Myofunctional therapy applied to upper airway resistance syndrome: a case report
                        </a>
                    </li>
                    <li>
                        <a href={"https://www.sciencedirect.com/science/article/pii/S0422763816301583?via=ihub"}>
                            Upper airway muscle exercises outcome in patients with obstructive sleep apnea syndrome
                        </a>
                    </li>
                    <li>
                        <a href={"https://link.springer.com/article/10.1007/s00405-017-4848-5"}>
                            Oropharyngeal and tongue exercises (myofunctional therapy) for snoring: a systematic review and meta-analysis
                        </a>
                    </li>
                    <li>
                        <a href={"https://www.ncbi.nlm.nih.gov/pmc/articles/PMC8066493/"}>
                            Orofacial Myofunctional Therapy in Obstructive Sleep Apnea Syndrome: A Pathophysiological Perspective
                        </a>
                    </li>
                </ul>
            </section>
        </div>
    );
}
