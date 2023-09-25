import React, {ReactElement} from "react";
import NavBar from "../../components/navBar/navBar";
import Footer from "../../components/footer/footer";
import './about.scss';

export default function About(): ReactElement {
    return (
        <>
            <NavBar/>
            <div>This is the about page</div>
            <Footer/>
        </>
    );
}