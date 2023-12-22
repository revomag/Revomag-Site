import {ReactElement} from "react";
import NavBar from "./navBar/navBar";
import HamburgerMenu from "./hamburgerMenu/hamburgerMenu";

/**
 * Renders the appropriate navigation menu based on the device type
 * @constructor
 */
export default function Navigation(): ReactElement {
    return (
        <>
            <HamburgerMenu/>
            <NavBar/>
        </>
    );
}
