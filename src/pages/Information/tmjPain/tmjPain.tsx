import {ReactElement} from "react";
import Navigation from "../../../components/navigation/navigation";
import Banner from "../../../components/banner/banner";
import Footer from "../../../components/footer/footer";
import TMJpain from "../../../assets/bannerImages/TMJpain.jpeg";
import Headshot from "../../../assets/NicoleHeadshot.jpg";
import './tmjPain.scss';

/**
 * Renders Mouth Breathing page
 * @constructor
 */
export default function TmjPain(): ReactElement {
    return (
        <div className={'tmj-pain-content'}>
            <Navigation/>
            <Banner imageSrc={TMJpain} imageAlt={'Skull showing TMJ Pain'}/>
            <section className={'tmj-pain-content-container'}>
                <h2>TEMPORAL MANDIBULAR JOINT PAIN</h2>
                <p>Many patients see a myofunctional therapist as a part of their treatment for temporal mandibular joint “TMJ” pain . Low tongue posture, mouth breathing, open mouth posture, tongue thrust swallow and other dysfunctional swallowing patterns over a lifetime increase the risk of pain in the TMJ. This pain can be from the joint itself or from the muscles that allow the joint to function. This pain is interchangeably called “TMJ” “TMD” “TMJD” or just simply “Jaw Pain.”</p>
                <div className={"tmj-pain-image1-container"}>
                    <img id={'tmj-pain-image1'} src={Headshot} alt={"nicole headshot"} loading={'lazy'}/>
                </div>
                <h3>There are 4 main causes for jaw pain:</h3>
                <ul>
                    <li>Problem 1: Clenching and Grinding - this activation of the sympathetic fight or flight response of the nervous system often occurs as a drive to be able to open the airway to breathe better. The activation of the facial muscles often occurs while you are sleeping to bring the lower jaw forward (much the same way you would manually bring the jaw forward to open the airway when performing CPR). The activation of the facial muscles can exert as much as 1000psi of force on the teeth often leaving them worn down, cracked, and broken over time.</li>
                    <li>Problem 2: Forward Head Posture- While the tongue is low in the mouth, it tends to lessen the airway space. Mouth breathing, low tongue posture and a compromised airway lead to forward head posture.This is a subconscious attempt to breathe better and open up the airway. This can occur during the daytime or at night. As the head comes forward, the muscles of the neck become fatigued and strained as well, contributing to more head, neck, back and/or shoulder pain and tenderness. This extra weight by having the head forward of its center axis can lead to head, neck, and back pain in additional to TMJ pain.</li>
                    <li>Problem 3: Fascia and Compensations - Fascia is a thin casing of connective tissue that surrounds and holds every organ, blood vessel, bone, nerve fiber and muscle in place. Recent research has shown that the “Deep Front Line Fascia” connects the tongue to lungs, diaphragm, hips, knees and feet. When there is a tongue restriction or a habit of low tongue posture, that changes the way that the deep front line fascia works all through the body. Compensatory habits of facial muscles that result from the tongue tie or dysfunctional use of the outer muscles of the tongue put additional strain on the jaw joint and the muscles that open and close the joint. Dysfunctional use of those muscles and the joint itself can lead to pain.</li>
                    <li>Problem 4: Changes to Occlusion - the narrowing of the upper arch, flattening of the biting surface of the teeth and incorrect tongue posture may lead to disc compression and displacement. Tongue posture influences growth and development. When the tongue is low, the maxilla grows down or “drops” (instead of growing out and forward) and the mandible grows down and back. The maxilla “traps” the mandible from coming forward and the disc inside the TMJ is compressed.</li>
                </ul>
                <div className={"tmj-pain-image2-container"}>
                    <img id={'tmj-pain-image2'} src={Headshot} alt={"nicole headshot"} loading={'lazy'}/>
                </div>
                <p>Chronic pain is often the result of a combination of the problems mentioned. Changes to occlusion and craniofacial development add to the problems. If there is no tongue-to-palate contact there is no stability/support for the jaw joints.</p>
                <p>TMD symptoms can include but are not limited to: inability to open the jaw very much, history of night guard, bite guard or splint, headaches or migraines, facial pain or tension, clicking/popping/grinding from the jaw joint, neck and shoulder pain or tension, and pain in the muscles around the jaw joint or above the ear.</p>
                <p>Myofunctional therapy can help alleviate the long-term causes of TMJ pain by restoring the muscles and the joint to their normal function by reaching correct tongue posture and a proper swallowing pattern. Myofunctional therapy for temporal mandibular joint pain is optimal when done in conjunction with a variety of other treatments including: appliance therapy from a dentist, chiropractic care by specialists trained in the TMJ, intra-oral and extra-oral massage therapy.</p>
                <div className={'tmj-pain-video-container'}>
                    <p>This video explains the intimate relationship between TMJ problems and breathing. Jaw pain, crooked teeth, forward head posture and headaches are often seen together.</p>
                    <iframe src="https://www.youtube.com/embed/W7zz-xRn2k4?si=aXSlApxae6n9Lhgp"
                            title="YouTube video player"
                            loading={'lazy'}
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
