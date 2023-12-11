import {ReactElement} from "react";
import Navigation from "../../../components/navigation/navigation";
import Banner from "../../../components/banner/banner";
import ThumbSucking from "../../../assets/bannerImages/thumbSucking.jpeg";
import OpenBite from "../../../assets/thumbAndFingerSucking/Thumb sucking, open bite.jpeg";
import NarrowPalate from "../../../assets/thumbAndFingerSucking/narrowPalateHighArch.png";
import RecedingChin from "../../../assets/thumbAndFingerSucking/receededChin.jpeg";
import Profile from "../../../assets/mouthBreathing/profile.png";
import './thumbAndFingerSucking.scss';

/**
 * Renders Mouth Breathing page
 * @constructor
 */
export default function ThumbAndFingerSucking(): ReactElement {
    return (
        <div className={'thumb-sucking-content'}>
            <Navigation/>
            <Banner
                imageSrc={ThumbSucking}
                imageAlt={'Sleeping girl sucking her thumb'}
                imageTitle={'Sleeping girl sucking her thumb'}
            />
            <section className={'thumb-sucking-content-container'}>
                <h2>Thumb and Finger Sucking</h2>
                <p>Thumb or finger sucking habits are quite normal in infancy and early childhood. Many children have these habits for their first few years of life and then stop naturally on their own. It is unnecessary to cause undue attention to these habits at a very early age, as it may cause more harm than good.</p>
                <p>Sucking habits become a concern when they are considered excessive. The intensity, frequency, and duration of the habit are factors that can help you determine if your child’s sucking habit is excessive.</p>
                <h3>Ask yourself the questions below as a guide:</h3>
                <ol>
                    <li><span style={{fontWeight: 'bold'}}>Intensity:</span> Is the thumb/finger being sucked forcefully enough that the thumb has developed calluses, or changed shape? Can you see strong contraction of the cheeks during the sucking?</li>
                    <li><span style={{fontWeight: 'bold'}}>Frequency:</span> Does the sucking occur all day and all night? Does it occur in public or around non-family members?</li>
                    <li><span style={{fontWeight: 'bold'}}>Duration:</span> How many years has the habit persisted? (If permanent teeth become involved, there is greater concern.)</li>
                </ol>
                <h3>What Age Should the Habit be Stopped?</h3>
                <p>Sucking habits begin to cause developmental problems to the dental and facial structures if they last beyond 3 years of age. If the sucking habit is excessive, the sooner the problem is identified and addressed, the better!</p>
                <h3>Facial Growth and Development</h3>
                <p>The front teeth are the most noticeable structure to be negatively impacted by a thumb or finger sucking habit. However, the entire growth pattern and development of the face can be altered when an excessive sucking habit is present.</p>
                <p>These are the most common growth problems associated with sucking habits:</p>
                <p><span style={{fontWeight: 'bold'}}>Teeth:</span> A dental “open bite” may form, as well as a cross bite of the back teeth, and/or an over-jet.</p>
                <div className={"thumb-sucking-image3-container"}>
                    <img
                        id={'thumb-sucking-image3'}
                        src={OpenBite}
                        alt={"Open bite caused by thumb sucking"}
                        title={'Open bite caused by thumb sucking'}
                        loading={'lazy'}
                    />
                </div>
                <p><span style={{fontWeight: 'bold'}}>Upper Jaw:</span> Forms narrow and high, leaving less space for the nasal sinuses, often affecting the airway and breathing. The tongue can no longer fit easily in the palate, where it should naturally rest.</p>
                <div className={"thumb-sucking-image4-container"}>
                    <img
                        id={'thumb-sucking-image4'}
                        src={NarrowPalate}
                        alt={"narrow palate with high arch"}
                        title={'Comparison of a narrow palate with a high arch to a normal wide palate'}
                        loading={'lazy'}
                    />
                </div>
                <p><span style={{fontWeight: 'bold'}}>Lower Jaw:</span> Develops smaller and less prominent, creating a “weak chin” appearance. The profile can be drastically changed by the pressure of the thumb resting on the lower jaw and lower teeth.</p>
                <div className={"thumb-sucking-image5-container"}>
                    <img
                        id={'thumb-sucking-image5'}
                        src={RecedingChin}
                        alt={"Comparison of a recessed chin profile and a normal profile"}
                        title={'Comparison of a recessed chin profile and a normal profile'}
                        loading={'lazy'}
                    />
                </div>
                <p><span style={{fontWeight: 'bold'}}>Tongue:</span> The tongue is trained to rest low and forward in the mouth by the thumb. An abnormal “tongue thrust" swallow is learned affecting eating, drinking, breathing, speech, appearance, and rest posture of the face.</p>
                <p><span style={{fontWeight: 'bold'}}>Appearance:</span> A longer, narrower, and flattened face shape is assumed. All of the structures have grown in downward patterns, as the jaw and mouth are constantly open to accommodate the thumb or finger. The jaw bones and cheek bones form to be much less prominent. A general ‘dull’ or sleepy appearance is common.</p>
                <div className={"thumb-sucking-image6-container"}>
                    <img
                        id={'thumb-sucking-image6'}
                        src={Profile}
                        alt={"Under developed craniofacial anatomy comparison"}
                        title={'Comparison of under developed craniofacial anatomy to normal craniofacial anatomy'}
                        loading={'lazy'}
                    />
                </div>
                <h3>How can a Myofunctional Therapist help?</h3>
                <p>A myofunctional therapist can be an instrumental figure in helping to stop a sucking habit. Some children need positive reinforcement from an outside source to help them become motivated to stop the habit. Treating underlying myofunctional disorders is the key to treating thumb sucking and other oral habits. Myofunctional therapists are specially trained to help children and adults gain control over habits in a very positive and non-threatening manner.</p>
                <p>Orthodontic appliances may also be used to stop a habit, but are often considered a last resort and often don’t address the root cause which can cause relapse when the appliance is removed. If necessary, an appliance may be prescribed by your orthodontist and used in combination with Myofunctional Therapy. No matter how your child is able to break the habit, a consultation with a Myofunctional Therapist can be very valuable. There is no guarantee that the growth problems associated with sucking habits will normalize on their own.</p>
                <h3>The Habit Has Stopped, Should I Still See an Oral Myofunctional Therapist?</h3>
                <p>YES! Even if the habit has stopped, the musculature does not always return to “normal” on its own and the dysfunction remains. The obstacle may be gone, but the poor oral posture and tongue thrust are left behind. Often, because the child or adult has used the facial and oral muscles incorrectly for many years, these muscles need to be re-trained in order to function naturally.</p>
                <p>Unless the underlying cause of thumb sucking, finger sucking, object sucking or nail biting has been addressed the underlying myofunctional disorders will manifest in other habits that affect the formation of the mouth, and lead to a lifetime of jaw problems, orthodontic alignment issues, and sleep disorders.</p>
                <p>A person swallows on average 2,000 times per day. While thumb or finger sucking, they are learning this swallowing behavior which continues even when it’s not in the mouth. This “tongue thrust” swallowing pattern is adopted and for many people, becomes the ordinary way that their body swallows into adulthood and throughout their life.</p>
                <p>A tongue thrust is considered to be symptom of a myofunctional disorder. If the muscles are not re-trained, problems with speech, orthodontic treatment, dental health, swallowing, breathing, and sleep may persist throughout life. Myofunctional therapy is needed to make muscular changes in order to correct a tongue thrust, mouth breathing, and low tongue posture.</p>
            </section>
        </div>
    );
}
