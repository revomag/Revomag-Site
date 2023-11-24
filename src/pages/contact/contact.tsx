import {ReactElement} from "react";
import Navigation from "../../components/navigation/navigation";
import Banner from "../../components/banner/banner";
import Footer from "../../components/footer/footer";
import BeachPano from "../../assets/BeachPano.jpg";
import './contact.scss';

/**
 * Renders the contact page
 * @constructor
 */
export default function Contact(): ReactElement {
    return (
        <div className={'contact-content'}>
            <Navigation/>
            <Banner imageSrc={BeachPano} imageAlt={'beach pano'} message={'Contact'}/>
            <section className={'contact-content-container'}>
                <h2>Contact Me</h2>
                <div className={'contact-info-container'}>
                    <p>Nicole Cantello, RDH, Myofunctional Therapist</p>
                    <div>
                        <a className={'contact-phone'} href={"tel:805-453-1343"}>(805) 570-2356 (text or phone calls welcome)</a>
                    </div>
                    <div>
                        <a className={'contact-email'} href={'mailto:nicole@santabarbaramyo.com'}>nicole@santabarbaramyo.com</a>
                    </div>
                </div>
                <div className={'contact-services-description'}>
                    <p>I am currently working with children aged 7 and older, teens, and adult patients. Common symptoms addressed by myofunctional therapy include: tongue tie, tongue thrust, TMJ pain, TMD, jaw pain, sleep disordered breathing, upper respiratory resistance syndrome, sleep apnea, snoring, and mouth breathing.</p>
                    <p>If you have questions, would like more information or would like to discuss referring a patient to Santa Barbara Myo, please feel free to reach out via phone, email, text or by using the secure message button below. I look forward to caring for you.</p>
                </div>
                <div className={'contact-button-container'}>
                    <button>Send an Encrypted Message</button>
                    <button>Book an Appointment</button>
                    <button>Existing Patient - Access Client Portal</button>
                </div>
            </section>
            <Footer/>
        </div>
    );
}
