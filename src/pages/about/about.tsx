import React, {ReactElement} from "react";
import NavBar from "../../components/navBar/navBar";
import './about.scss';

export default function About(): ReactElement {
    return (
        <>
            <NavBar/>
            <div>This is the about page</div>
        </>
    );
}