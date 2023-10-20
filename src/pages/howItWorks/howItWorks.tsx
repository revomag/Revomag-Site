import {ReactElement} from "react";
import NavBar from "../../components/navBar/navBar";
import Footer from "../../components/footer/footer";
import './howItWorks.scss';

export default function HowItWorks(): ReactElement {
    return (
        <>
            <NavBar/>
            <div>This is the How It Works page</div>
            <Footer/>
        </>
    );
}
