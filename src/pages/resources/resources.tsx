import {ReactElement} from "react";
import NavBar from "../../components/navigation/navBar/navBar";
import Footer from "../../components/footer/footer";
import './resources.scss';

export default function Resources(): ReactElement {
    return (
        <>
            <NavBar/>
            <div>This is the Resources page</div>
            <Footer/>
        </>
    );
}
