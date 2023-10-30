import {ReactElement} from "react";
import Navigation from "../../components/navigation/navigation";
import Footer from "../../components/footer/footer";
import './resources.scss';

export default function Resources(): ReactElement {
    return (
        <>
            <Navigation/>
            <div>This is the Resources page</div>
            <Footer/>
        </>
    );
}
