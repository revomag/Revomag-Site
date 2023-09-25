import React, {ReactElement} from "react";
import NavBar from "../../components/navBar/navBar";

export default function Information(): ReactElement {
    return (
        <>
            <NavBar/>
            <div>This is the Information page. This should actually not be a page, and should instead be a dropdown menu with a bunch of other pages.</div>
        </>
    );
}
