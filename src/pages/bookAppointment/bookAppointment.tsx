import React, {ReactElement} from "react";
import NavBar from "../../components/navBar/navBar";
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