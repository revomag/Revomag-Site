import {ReactElement} from "react";
import Navigation from "../../components/navigation/navigation";
import Footer from "../../components/footer/footer";
import './bookAppointment.scss';

export default function BookAppointment(): ReactElement {
    return (
        <>
            <Navigation/>
            <div>This is the Book Appointment page</div>
            <Footer/>
        </>
    );
}