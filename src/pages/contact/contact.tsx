import {ReactElement} from "react";
import Navigation from "../../components/navigation/navigation";
import Banner from "../../components/banner/banner";
import SimplePracticeWidget from "../../components/simplePracticeWidget/simplePracticeWidget";
import SimpleButton from "../../components/simpleButton/simpleButton";
import ContactIcons from "../../assets/bannerImages/contact.jpeg";
import './contact.scss';

/**
 * Renders the contact page
 * @constructor
 */
export default function Contact(): ReactElement {
    return (
        <div className={'contact-content'}>
            <Navigation/>
            <Banner
                imageSrc={ContactIcons}
                imageAlt={'contact methods'}
                imageTitle={'Contact SB Myo via call, text, or email'}
            />
            <section className={'contact-content-container'}>
                <h1>Contact Me</h1>
                <div className={'contact-info-container'}>
                    <p>Nicole Cantello, RDH, Myofunctional Therapist</p>
                    <div>
                        <a className={'contact-phone'} href={"tel:805-453-1343"}>(805) 453-1343 (text or phone calls welcome)</a>
                    </div>
                    <div>
                        <a className={'contact-email'} href={'mailto:nicole@santabarbaramyo.com'}>nicole@santabarbaramyo.com</a>
                    </div>
                </div>
                <div className={'contact-services-description'}>
                    <p>I am currently working with children age 5 and older, teens, and adult patients. Common symptoms addressed by myofunctional therapy include: tongue tie, tongue thrust, TMJ pain, TMD, jaw pain, sleep disordered breathing, upper respiratory resistance syndrome, sleep apnea, snoring, and mouth breathing.</p>
                    <p>If you have questions, would like more information or would like to discuss referring a patient to Santa Barbara Myo, please feel free to reach out via phone, email, text or by using the secure message button below. I look forward to caring for you.</p>
                </div>
                <div className={'contact-button-container'}>
                    {/*Book an Appointment through Simple Practice*/}
                    {/*<SimplePracticeWidget*/}
                    {/*    buttonText={'Schedule an Appointment'}*/}
                    {/*    href={"https://santabarbaramyo.clientsecure.me"}*/}
                    {/*/>*/}
                    {/*Existing patient Simple Practice login*/}
                    <SimplePracticeWidget
                        buttonText={'Existing Patient - Access Client Portal'}
                        href={"https://santabarbaramyo.clientsecure.me/sign-in"}
                    />
                    {/*Send message via Hushmail*/}
                    <SimpleButton
                        buttonText={'Send An Encrypted Message'}
                        destination={'https://hushforms.com/santabarbaramyo_contact'}
                    />
                </div>
            </section>
        </div>
    );
}
