import {ReactElement} from "react";
import Navigation from "../../components/navigation/navigation";
import Footer from "../../components/footer/footer";
import './referAPatient.scss';
import Banner from "../../components/banner/banner";
import Handshake from "../../assets/bannerImages/referPatient.jpeg";

export default function ReferAPatient(): ReactElement {
    return (
        <>
            <Navigation/>
            <Banner imageSrc={Handshake} imageAlt={'handshake'}/>
            <div>This is the Refer A Patient page</div>
            <Footer/>
        </>
    );
}
