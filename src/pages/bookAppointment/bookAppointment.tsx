import {ReactElement} from "react";
import Navigation from "../../components/navigation/navigation";
import Footer from "../../components/footer/footer";
import './bookAppointment.scss';
import Banner from "../../components/banner/banner";
import ScheduleAppointment from "../../assets/bannerImages/appointmentBanner.jpeg";
import SimplePracticeWidget from "../../components/simplePracticeWidget/simplePracticeWidget";
import SimpleButton from "../../components/simpleButton/simpleButton";

/**
 * Renders the Book and Appointment page
 * @constructor
 */
export default function BookAppointment(): ReactElement {
    return (
        <>
            <Navigation/>
            <Banner
                imageSrc={ScheduleAppointment}
                imageAlt={'therapy appointment calendar'}
                imageTitle={'Therapy appointment schedule'}
            />
            <section className={'appointment-content-wrapper'}>
                <h2>Schedule a New Patient Comprehensive Exam</h2>
                <p>Your first visit will be a comprehensive exam reviewing your story, your mouth, throat, and airway. This will take place in a comfortable office in Santa Barbara, CA by Nicole Cantello your Oral Myofunctional Therapist. You can expect about a sixty to ninety minute visit which will include photographs, video of swallowing, an explanation of your conditions, and a brief description of your treatment plan. We will also discuss the cost of your treatment and payment plan options. You should plan for an expense of $225 for your initial visit which will be collected at time of service. (For more detailed information about costs see the How It Works page) </p>
                <p>When you click “Book Appointment”  you will be able to see a calendar of available appointment times. I am currently seeing patients age 5 and older. I am currently seeing new patients on Mondays, Tuesdays, and Thursdays before 3pm. If you need another day, please reach out to me and I will work to accommodate you as best as I can.</p>
                <SimplePracticeWidget
                    buttonText={'Schedule Comprehensive Exam'}
                    href={"https://nicole-cantello.clientsecure.me/request/service"}
                />
                <p>Not ready to schedule yet? Do you have questions you would like to talk through? You can schedule a complimentary 15 minute phone consult with Nicole!</p>
                <SimpleButton
                    buttonText={'Request a Consultation'}
                    destination={'https://hushforms.com/santabarbaramyo_consultation'}
                />
                <div className={'section-line'}/>
                <h2>Existing Patients</h2>
                <p>Existing patients who have already had a comprehensive exam and are enrolled in a therapy program, or are booking their first therapy session after the comprehensive exam can use the below link. When prompted, use the email address you provided during your initial scheduling or at your comprehensive exam appointment.</p>
                <SimplePracticeWidget
                    buttonText={'Existing Patient - Access Portal'}
                    href={"https://nicole-cantello.clientsecure.me/sign-in"}
                />
            </section>
            <Footer/>
        </>
    );
}
