import {ReactElement} from "react";
import Navigation from "../../components/navigation/navigation";
import Banner from "../../components/banner/banner";
import Bougainvillea from "../../assets/bannerImages/Bougainvillea2.jpeg"
import Headshot from "../../assets/NicoleHeadshot.jpg";
import Family from "../../assets/familyPicture.jpg"
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
                imageSrc={Bougainvillea}
                imageAlt={'bougainvillea hanging over wall'}
                imageTitle={'bougainvillea hanging over wall'}
            />
            <h2>About Nicole</h2>
            <div className={"about-content-container"}>
                <div className={"about-image-container"}>
                    <img
                        id={'headshot-image'}
                        src={Headshot}
                        alt={"nicole myofunctional therapist headshot"}
                        title={'Nicole Cantello, orofacial myofunction therapist'}
                        loading={'lazy'}
                    />
                </div>
                <div className={"about-content"}>
                    <div>
                        <p>Nicole is passionate about dental and airway health. She’s been in the dental field since
                            2010 and graduated from Dental Hygiene school in 2015 at the top of her class, receiving
                            both Valedictorian and the best in clinic Golden Scaler award. Nicole has been
                            enthusiastically practicing dental hygiene since then where she’s grown her clinical skills
                            and deepened her understanding of the mouth and body connection.</p>
                        <p>After learning about Myofunctional Therapy, Nicole realized that over the years she’s seen
                            thousands of patients with myofunctional disorders and knew she wanted to help them. This
                            was the missing puzzle piece. Nicole made the decision to continue her education and become
                            an Orofacial Myofunctional Therapist. She is currently seeing children, age 5 and older,
                            teens and adults. The focus of her practice, Santa Barbara Myo, is airway health and helping
                            individuals return to their physiologic normal so they can breathe optimally and live their
                            lives to their fullest potential.</p>
                        <p>Untreated myofunctional disorders can lead to poor facial growth, dental problems (crowding,
                            decay and periodontal disease), sleep apnea, and chronic pain such as TMD, headaches, neck
                            and shoulder issues. Many children with sleep disordered breathing are often misdiagnosed
                            with ADHD due to the effects of the reduced ability or inability to enter into deep sleep. A
                            tongue tied or mouth breathing child is destined to become an adult with sleep disordered
                            breathing or TMD.</p>
                        <p>In Nicole’s myofunctional therapy practice, she teaches and guides how to restore normal
                            function through tongue, lip and mouth exercises. Normal function is nasal breathing, lips
                            sealed, tongue up in palate and proper swallowing. These are things that we should all be
                            doing naturally and innately from the day that we’re born. If we’re not doing them,
                            something has gone wrong along the way. It can have a big impact on growth and development
                            of the jaws, craniofacial and airway structures, our appearance and our overall health and
                            wellness.</p>
                        <p>During treatment, Nicole will strive to understand the root cause of her patient’s symptoms.
                            “We will go through a thorough and detailed series of questions and assessments to help
                            determine why you may have that dysfunction”, says Nicole. “It is then that we can formulate
                            a plan of action to get your body back to physiologic normal.” Nicole collaborates with
                            other myofuctional therapists, surgeons, dentists, orthodontists and chiropractors to make
                            sure her patients have a team of specialized support.</p>
                        {/*<p>Nicole is a member of the American Dental Hygienists Association, International Association of Airway Hygienists, American Academy of Dental Hygiene, and a Breathe Institute Ambassador.</p>*/}
                        <p>She enjoys spending time with her husband, two sons and goldendoodle, hiking, and baking in
                            her free time.</p>
                    </div>
                </div>
            </div>
            <div className={"about-image-container"}>
                <img
                    id={'family-image'}
                    src={Family}
                    alt={"family picture"}
                    title={'Nicole\'s family'}
                    loading={'lazy'}
                />
            </div>
        </>
    );
}
