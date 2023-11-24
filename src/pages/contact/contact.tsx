import {ReactElement} from "react";
import Navigation from "../../components/navigation/navigation";
import Footer from "../../components/footer/footer";
import './contact.scss';

export default function Contact(): ReactElement {
    return (
        <>
            <Navigation/>
            <div>This is the Contact page</div>
            <Footer/>
        </>
    );
}
