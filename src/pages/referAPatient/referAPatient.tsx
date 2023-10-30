import {ReactElement} from "react";
import NavBar from "../../components/navigation/navBar/navBar";
import Footer from "../../components/footer/footer";
import './referAPatient.scss';

export default function ReferAPatient(): ReactElement {
    return (
        <>
            <NavBar/>
            <div>This is the Refer A Patient page</div>
            <Footer/>
        </>
    );
}
