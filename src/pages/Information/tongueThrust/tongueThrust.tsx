import {ReactElement} from "react";
import {isMobileDevice} from "../../../utils/helperFunctions";
import Navigation from "../../../components/navigation/navigation";
import Banner from "../../../components/banner/banner";
import Footer from "../../../components/footer/footer";
import TongueThrustBanner from "../../../assets/bannerImages/girlWithBracesSmiling.jpeg";
import TongueThrustOne from "../../../assets/tongueThrust/before after OMT.png";
import TongueThrustTwo from "../../../assets/tongueThrust/before after OMT 2.png";
import TongueThrustThree from "../../../assets/tongueThrust/before after OMT 3.png";
import './tongueThrust.scss';

/**
 * Renders Tongue Thrust page
 * @constructor
 */
export default function TongueThrust(): ReactElement {
    const isMobile = isMobileDevice();

    return (
        <div className={'tongue-thrust-content'}>
            <Navigation/>
            <Banner imageSrc={TongueThrustBanner} imageAlt={'beach pano'}/>
            {!isMobile ?
                <section className={'tongue-thrust-content-container'}>
                    <h2>Tongue Thrust and Orthodontics</h2>
                    <div className={'tongue-thrust-content-wrapper'}>
                        <div className={'tongue-thrust-content-copy'}>
                            <p>A tongue thrust describes a swallowing pattern in which an individual pushes the tongue against or between the teeth during swallowing.</p>
                            <p>Our teeth will move with consistent light pressure and our tongue is actually quite strong. Specifically, it takes 1.5 grams of consistent force to move a tooth. The tongue has a median average force of 499 grams and can go up to 700-800 grams of force. Individuals with a tongue thrust swallowing pattern will commonly have anterior open bite. This is where the front teeth do not touch when biting down with the back teeth.</p>
                            <p>This can affect the ability to have proper oral rest posture, correct tongue posture, ability to breathe through your nose and swallowing.</p>
                            <p>Simply put, form follows function. Or put another way, deformities follow dysfunction. If the muscles of your tongue are not functioning properly, it will affect multiple facial and airway structures. If tongue thrust is not corrected, this can lead to underdevelopment of craniofacial structures, high vaulted palate, sleep disordered breathing and dental problems such as crowding, periodontal disease and decay.</p>
                            <p>Orofacial myofunctional therapy is a method that can be used for eliminating a tongue thrust. It is an exercise based treatment that teaches patients how to use their tongue and facial muscles properly.</p>
                            <p>An Orofacial Myofunctional Therapist (OMT) can be an instrumental figure in helping a patient learn how to re-train the muscles of the face and tongue. OMTs are skilled at helping children and adults gain control over muscular habits, including those involved in a tongue thrust. For those who struggle with tongue thrusting, eliminating the habit is not always easy. This is due to the fact that the muscles of the face and mouth have been programmed over many years to adopt this behavior. It takes neuromuscular re-education to correct this habit and relearn the correct</p>
                            <h4>Orofacial myofunctional therapy in tongue thrust helps to:</h4>
                            <ul>
                                <li>Improve tongue elevation strength</li>
                                <li>Correct tongue resting posture</li>
                                <li>Correct tongue placement while swallowing</li>
                                <li>Improve tongue motility</li>
                                <li>Improve maxillary constriction</li>
                                <li>Prevent relapse of corrected malocclusion</li>
                                <li>Improve sleep-disordered breathing</li>
                            </ul>
                        </div>
                        <div>
                            <div className={"tongue-thrust-image-container"}>
                                <img id={'tongue-thrust-image'} src={TongueThrustOne} alt={"Orthodontic damage due to tongue thrust example 1"} loading={'lazy'}/>
                            </div>
                            <div className={"tongue-thrust-image-container"}>
                                <img id={'tongue-thrust-image'} src={TongueThrustTwo} alt={"Orthodontic damage due to tongue thrust example 2"} loading={'lazy'}/>
                            </div>
                            <div className={"tongue-thrust-image-container"}>
                                <img id={'tongue-thrust-image'} src={TongueThrustThree} alt={"Orthodontic damage due to tongue thrust example 3"} loading={'lazy'}/>
                            </div>
                        </div>
                    </div>
                    <div className={'tongue-thrust-videos-wrapper'}>
                        <div className={'tongue-thrust-video-container'}>
                            <h4>This video represents correct swallowing:</h4>
                            <iframe src="https://www.youtube.com/embed/j9RfQPC1IlY?si=sBY_FXrF4-6tsTlL"
                                    title="YouTube video player"
                                    loading={'lazy'}
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    allowFullScreen>
                            </iframe>
                        </div>
                        <div className={'tongue-thrust-video-container'}>
                            <h4>This video represents what a tongue thrust looks like:</h4>
                            <iframe src="https://www.youtube.com/embed/loXCfn7m41k?si=0oPf2RVvRbbFma45"
                                    title="YouTube video player"
                                    loading={'lazy'}
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    allowFullScreen>
                            </iframe>
                        </div>
                    </div>
                </section>
                : // Display mobile layout
                <section className={'tongue-thrust-content-container'}>
                    <h2>Tongue Thrust and Orthodontics</h2>
                    <p>A tongue thrust describes a swallowing pattern in which an individual pushes the tongue against or between the teeth during swallowing.</p>
                    <p>Our teeth will move with consistent light pressure and our tongue is actually quite strong. Specifically, it takes 1.5 grams of consistent force to move a tooth. The tongue has a median average force of 499 grams and can go up to 700-800 grams of force. Individuals with a tongue thrust swallowing pattern will commonly have anterior open bite. This is where the front teeth do not touch when biting down with the back teeth.</p>
                    <div className={"tongue-thrust-image-container"}>
                        <img id={'tongue-thrust-image'} src={TongueThrustOne} alt={"Orthodontic damage due to tongue thrust example 1"} loading={'lazy'}/>
                    </div>
                    <p>This can affect the ability to have proper oral rest posture, correct tongue posture, ability to breathe through your nose and swallowing.</p>
                    <p>Simply put, form follows function. Or put another way, deformities follow dysfunction. If the muscles of your tongue are not functioning properly, it will affect multiple facial and airway structures. If tongue thrust is not corrected, this can lead to underdevelopment of craniofacial structures, high vaulted palate, sleep disordered breathing and dental problems such as crowding, periodontal disease and decay.</p>
                    <div className={"tongue-thrust-image-container"}>
                        <img id={'tongue-thrust-image'} src={TongueThrustThree} alt={"Orthodontic damage due to tongue thrust example 3"} loading={'lazy'}/>
                    </div>
                    <p>Orofacial myofunctional therapy is a method that can be used for eliminating a tongue thrust. It is an exercise based treatment that teaches patients how to use their tongue and facial muscles properly.</p>
                    <p>An Orofacial Myofunctional Therapist (OMT) can be an instrumental figure in helping a patient learn how to re-train the muscles of the face and tongue. OMTs are skilled at helping children and adults gain control over muscular habits, including those involved in a tongue thrust. For those who struggle with tongue thrusting, eliminating the habit is not always easy. This is due to the fact that the muscles of the face and mouth have been programmed over many years to adopt this behavior. It takes neuromuscular re-education to correct this habit and relearn the correct</p>
                    <div className={"tongue-thrust-image-container"}>
                        <img id={'tongue-thrust-image'} src={TongueThrustTwo} alt={"Orthodontic damage due to tongue thrust example 2"} loading={'lazy'}/>
                    </div>
                    <h4>Orofacial myofunctional therapy in tongue thrust helps to:</h4>
                    <ul>
                        <li>Improve tongue elevation strength</li>
                        <li>Correct tongue resting posture</li>
                        <li>Correct tongue placement while swallowing</li>
                        <li>Improve tongue motility</li>
                        <li>Improve maxillary constriction</li>
                        <li>Prevent relapse of corrected malocclusion</li>
                        <li>Improve sleep-disordered breathing</li>
                    </ul>
                    <div className={'tongue-thrust-videos-wrapper'}>
                        <div className={'tongue-thrust-video-container'}>
                            <h4>This video represents correct swallowing:</h4>
                            <iframe src="https://www.youtube.com/embed/j9RfQPC1IlY?si=sBY_FXrF4-6tsTlL"
                                    title="YouTube video player"
                                    loading={'lazy'}
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    allowFullScreen>
                            </iframe>
                        </div>
                        <div className={'tongue-thrust-video-container'}>
                            <h4>This video represents what a tongue thrust looks like:</h4>
                            <iframe src="https://www.youtube.com/embed/loXCfn7m41k?si=0oPf2RVvRbbFma45"
                                    title="YouTube video player"
                                    loading={'lazy'}
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    allowFullScreen>
                            </iframe>
                        </div>
                    </div>
                </section>
            }
            <Footer/>
        </div>
    );
}
