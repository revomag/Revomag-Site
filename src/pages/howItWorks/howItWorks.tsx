import {ReactElement} from "react";
import Navigation from "../../components/navigation/navigation";
import Footer from "../../components/footer/footer";
import './howItWorks.scss';

export default function HowItWorks(): ReactElement {
    return (
        <>
            <Navigation/>
            <div>This is the How It Works page</div>
            <Footer/>
        </>
    );
}
