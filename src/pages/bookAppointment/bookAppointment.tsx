import {ReactElement} from "react";
import NavBar from "../../components/navigation/navBar/navBar";
import Footer from "../../components/footer/footer";
import './bookAppointment.scss';

export default function BookAppointment(): ReactElement {
    return (
        <>
            <NavBar/>
            <div>This is the Book Appointment page</div>
            <Footer/>
        </>
    );
}