import {ReactElement} from "react";
import Navigation from "../../../components/navigation/navigation";
import Banner from "../../../components/banner/banner";
import Footer from "../../../components/footer/footer";
import TongueTieBannerImage from "../../../assets/bannerImages/tongueTie.jpeg";
import Headshot from "../../../assets/NicoleHeadshot.jpg";
import './tongueTie.scss';

/**
 * Renders Tongue Tie page
 * @constructor
 */
export default function TongueTie(): ReactElement {
    return (
        <div className={'tongue-tie-content'}>
            <Navigation/>
            <Banner imageSrc={TongueTieBannerImage} imageAlt={'Child with tongue tie'}/>
            <section className={'tongue-tie-content-container'}>
                <h2>TONGUE TIE</h2>
                <div className={"tongue-tie-image1-container"}>
                    <img id={'tongue-tie-image1'} src={Headshot} alt={"nicole headshot"} loading={'lazy'}/>
                </div>
                <p>Under the tongue is a band of tissue called the frenum. The frenum attaches the tongue to the floor of the mouth. If this attachment is too tight or restrictive, this is called a tongue tie.</p>
                <p>How your tongue is attached to the floor of the mouth plays a significant role in how your face grows and how your mouth functions through breathing, speech and swallowing.</p>
                <h3>Tongue ties can affect:</h3>
                <ul>
                    <li>Craniofacial development: Our tongue is natures “natural retainer”. The pressure of it being lightly suctioned to the roof of the mouth guides optimal growth and development. When there’s a tethered oral tissues (TOT) like a tongue tie, it will prevent the tongue from resting in that optimal position. As a result, underdeveloped jaw and facial structures will occur. The palate will grow narrow instead of wide, which causes malocclusion or “crooked teeth”. The maxilla will grow down and drop, instead of growing out and forward, which causes the typical long and narrow face we call “adenoid face”. It also causes “gummy smile” which is when there is an excess of upper jaw gum tissue showing due to vertical maxillary growth from low tongue posture and open mouth resting state.</li>
                    <li>Eating and swallowing: In normal function, our tongue fully reaches the hard and soft palate during swallowing, which guides our food down our throat. When there is a restriction, the tongue is limited with har far to the palate it can go, and the individual will often feel like food is “stuck” in the back of mouth. Children especially are affected by this and will often avoid certain foods with certain textures that are more likely to get stuck. This is often make a child appear to be a “picky eater”, when in reality, they are protecting their airway.</li>
                    <li>How we clear food in mouth: Both children and adults with tongue ties will have limited mobility of the tongue. The tongue is the best cleaning tool we have to clear food debris from our mouth while eating. With very limited range of motion, debris will “get stuck” around our teeth, gums and cheeks, unable to be reached and dislodged by our tongue. This will cause decay and periodontal disease.</li>
                    <li>Speech issues: When the tongue to tethered to the floor of the mouth, there are many sounds that are difficult or impossible to make. Myofunctional therapy is not speech therapy, these are two distinct fields. However, in the case of restrictions, many times a child’s ability to pronounce certain sounds will improve after a release and myofunctional therapy.</li>
                </ul>
                <div className={"tongue-tie-image2-container"}>
                    <img id={'tongue-tie-image2'} src={Headshot} alt={"nicole headshot"} loading={'lazy'}/>
                </div>
                <p>For many years we have used a single method for identifying tongue tie (ankyloglossia). Over the last decade that definition has been built upon as we have had a greater understanding upon how the frenulum, fascia, muscle attachment and mobility effect normal function.</p>
                <p>The IAAP (International  Affiliation  of  Tongue-Tie  Professionals) defines “tongue-tie” as an embryological remnant of tissue in the midline between  the  undersurface  of  the  tongue  and  the  floor  of  the  mouth that  restricts  normal  tongue  movement.</p>

                <h3>We currently describe ‘tongue tie’ or ‘tongue restriction’ in 5 dimensions:</h3>
                <ul>
                    <li>How far you can stick out the tongue*</li>
                    <li>How far you lift the tongue up to the incisive papilla (just behind the upper back teeth with mouth open)*</li>
                    <li>How far you can open your mouth while your tongue is fully suctioned to the roof of  your mouth*</li>
                    <li>How much the floor of the mouth, neck and other muscles help you to suction your tongue or lift your tongue to the spot</li>
                    <li>Muscle tension caused by the first three</li>
                </ul>
                <p className={'italic'}>*These first three are well documented in the scientific literature, research is still ongoing to quantify the 4th & 5th dimensions of tongue restriction, we know they are related but researchers are still working to define how they are measured reliably.</p>
                <div className={"tongue-tie-image3-container"}>
                    <img id={'tongue-tie-image3'} src={Headshot} alt={"nicole headshot"} loading={'lazy'}/>
                </div>
                <h3>How we assess</h3>
                <p>When you meet with your Myofunctional Therapist, Nicole Cantello, she will take several measurements of your tongue range of motion and discuss the restrictions you have.  If a tongue tie release is recommended, she will refer you to a highly qualified surgeon who has taken additional training in tongue tie assessment and treatment to release the tissues that are holding you back from normal function.</p>
                <p>The tongue tie release will be done mid-therapy after you have developed muscle tone and coordination with the muscles around the frenulum. Once the release is completed we will work together to develop the tone, coordination and function of the newly released tongue and work towards optimal oral muscle function.</p>
                <h3>Additional Reading</h3>
                <p>For additional information, I recommend you explore the website of one of the world leaders in tongue tie research, Dr. Zaghi.</p>
                <a href={'https://www.zaghimd.com/tongue-tie.'}>
                    https://www.zaghimd.com/tongue-tie
                </a>
            </section>
            <Footer/>
        </div>
    );
}
