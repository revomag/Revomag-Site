import {ReactElement} from "react";
import Navigation from "../../components/navigation/navigation";
import Footer from "../../components/footer/footer";
import './bookAppointment.scss';
import Banner from "../../components/banner/banner";
import ScheduleAppointment from "../../assets/bannerImages/appointmentBanner.jpeg";

export default function BookAppointment(): ReactElement {
    return (
        <>
            <Navigation/>
            <Banner imageSrc={ScheduleAppointment} imageAlt={'calendar'} message={'Book Appointment'}/>
            <div>This is the Book Appointment page</div>
            <Footer/>
        </>
    );
}