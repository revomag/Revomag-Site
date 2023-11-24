import {ReactElement} from "react";
import Navigation from "../../../components/navigation/navigation";
import Banner from "../../../components/banner/banner";
import Footer from "../../../components/footer/footer";
import OpenMouthBreathing from "../../../assets/bannerImages/OpenMouthWomanSeeping.jpeg";
import Headshot from "../../../assets/NicoleHeadshot.jpg";
import './mouthBreathing.scss';

/**
 * Renders Mouth Breathing page
 * @constructor
 */
export default function MouthBreathing(): ReactElement {
    return (
        <div className={'mouth-breathing-content'}>
            <Navigation/>
            <Banner imageSrc={OpenMouthBreathing} imageAlt={'Sleeping woman breathing through her mouth'}/>
            <section className={'mouth-breathing-content-container'}>
                <h2>MOUTH BREATHING</h2>
                <div className={"mouth-breathing-image1-container"}>
                    <img id={'mouth-breathing-image1'} src={Headshot} alt={"nicole headshot"}/>
                </div>
                <p>Mouth breathing has a great use when we need it, such as times that we sense danger when our bodies need to shift into a “fight or flight” sympathetic state. However, habitual mouth breathing can sustain this fight or flight response. This makes it difficult for the body and mind to rest, even when there is no impending danger. Mouth breathing during sleep has been associated with sleep disordered breathing and obstructive sleep apnea.</p>
                <p>Mouth breathing activates the upper chest, shallow breathing and leads to over breathing. Nasal breathing activates “rest and digest” parasympathetic nervous system, activates the diaphragm and deeper breathing.</p>
                <p>Mouth breathing is a postural habit that can develop for numerous reasons such as a nasal blockage (allergies, enlarged adenoids or tonsils, chronic nasal congestion), thumb or finger sucking habit, low tongue posture or a tongue tie. While the reasons may very, the consequences are the same.</p>
                <p>Humans are designed to breath through our nose. It is the primary organ responsible for oxygenating our body.</p>
                <h3>Reasons to nasal breathe:</h3>
                <h4>Immunity</h4>
                <p>Breathing through our nose warms, humidifies and filters the air we take into our body. Air that is breathed directly into the lungs is not filtered. Breathing through the nose filters the air before it enters our body. Allergens, bacteria and viruses are filtered out of the body through the turbinates and adenoids. The mucous of airway linings also collects potential contaminants where they’re destroyed by nasal enzymes before they can enter our body.</p>
                <h4>Dental health</h4>
                <p>Breathing through the mouth causes the oral cavity to become dried out, Saliva is the buffering agent which neutralizes acids so a dehydrated oral cavity causes excess acids in the mouth. This will lead to increased cavities and gum disease.</p>
                <h4>Proper Craniofacial growth</h4>
                <p>Mouth breathing can change the shape of your face and alter your appearance. This is especially true in children as they’re still growing. Children whose mouth breathing goes untreated may suffer from abnormal facial, dental and neurological development. Symptoms include long and narrow face and mouth “adenoid face”, less defined and flat cheekbones, narrow palate and small lower jaws, recessed or “weak” chins and smaller airways. Other facial symptoms include crowding due to underdeveloped jaws and inadequate space and “gummy smiles”. Mouth breathing in children will often lead to a lifetime of sleep disordered breathing, snoring and sleep apnea.</p>
                <h4>Reduces snoring, sleep apnea and improves airway health</h4>
                <div className={"mouth-breathing-image2-container"}>
                    <img id={'mouth-breathing-image2'} src={Headshot} alt={"nicole headshot"}/>
                </div>
                <p>When we breathe through our mouth we have to have a low tongue posture (tongue on floor of mouth). Low tongue posture directly reduces airway diameter, especially in the evening. Daytime effects of low tongue posture can cause the head to shift forward out of the natural alignment of our spine in an effort to create more space and open the airway. During nighttime, if the tongue is not suctioned to the roof of mouth, it will naturally shift back into our airway and partially or fully obstruct it. This is what causes snoring and sleep apnea. It also activates the sympathetic nervous system. The sympathetic nervous system activates fight or flight during a threat or perceived danger. It is difficult to get into “deep sleep”, which is the restorative and regenerative sleep we need, when our bodies are in a fight or flight response all night. This greatly affects sleep quality, hormone health and overall mental and physical health. Children are commonly misdiagnosed with ADHD due to sleep disordered breathing.</p>
                <p className={'italic'}> **Current literature demonstrates that myofunctional therapy decreases apnea-hypopnea index (AHI) by approximately 50% in adults and 62% in children.</p>
                <h4>Oxygen absorption</h4>
                <p>Nasal breathing regulates the amount of air that comes into the body. When you breathe through your mouth, you’re exhaling out too much carbon dioxide. We need CO2 to accumulate in our body in order to optimally utilize the oxygen we breathe in. Carbon dioxide plays a significant role in the release of oxygen from hemoglobin, it triggers breathing, maintains blood pH and prevents smooth muscle spasms.</p>
                <p className={'italic'}>Contrary to popular belief, oxygen is absorbed on the exhale, not the inhale. The back pressure created in the lungs with the slower exhale of nose breathing allows more time for the lungs to transfer oxygen to the blood. This exchange requires CO2. Exhaling through the mouth blows the CO2 out too quickly, resulting in less oxygen being absorbed.</p>
                <p>The reason nasal breathing results in more oxygen being absorbed, specifically 18% more oxygen compared to mouth breathing, is because of nitric oxide. Nitric oxide is released in the nasal cavity and inhaled with nasal breathing. Nitric oxide increases the efficiency of oxygen exchange by 18%. There is NO nitric oxide inhaled with mouth breathing, therefore, less CO2 absorbed. Reduced oxygen absorption can lead to a cascade of issues effecting sleep, stamina, energy levels and ADHD symptoms.</p>
                <p>Most people that mouth breath have a very low CO2 tolerance. They “feel” like they’re not getting enough oxygen, which is not true. Their bodies are just not used to the levels of CO2 that they need for optimal health.</p>
                <p>*A note on nitric oxide- nitric oxide is a very important signaling molecule in the CV system. Enzymes in the nose and sinus produce Nitric Oxide and its released into our bodies when we inhale through our nose. It has anti-inflammatory, anti- microbial and anti-viral properties. When we mouth breath, we bypass this entire system and don’t get this immune function from Nitric Oxide bathing our airway.</p>
                <div className={'mouth-breathing-video-container'}>
                    <iframe src="https://www.youtube.com/embed/AcCHaNgwtwo?si=zlQUuXXhnWn_2rcI"
                            title="YouTube video player"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowFullScreen>
                    </iframe>
                    <h3>Other benefits include:</h3>
                    <ul>
                        <li>Decreased anxiety</li>
                        <li>Activates parasympathetic (calming) nervous system</li>
                        <li>Makes you less likely to cough</li>
                        <li>Increased lung capacity</li>
                        <li>Improved athletic performance</li>
                        <li>Increased mental clarity and alertness</li>
                    </ul>
                </div>
                <div className={'mouth-breathing-video-container'}>
                    <iframe src="https://www.youtube.com/embed/u1GUuZsHDZY?si=Ao6bE56FdixPlxDd"
                            title="YouTube video player"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowFullScreen>
                    </iframe>
                </div>
            </section>
            <Footer/>
        </div>
    );
}
