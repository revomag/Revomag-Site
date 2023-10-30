import {ReactElement} from "react";
import Navigation from "../../components/navigation/navigation";
import Footer from "../../components/footer/footer";
import './referAPatient.scss';

export default function ReferAPatient(): ReactElement {
    return (
        <>
            <Navigation/>
            <div>This is the Refer A Patient page</div>
            <Footer/>
        </>
    );
}
