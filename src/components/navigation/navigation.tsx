import {ReactElement} from "react";
import {isMobileDevice} from "../../utils/helperFunctions";
import NavBar from "./navBar/navBar";
import HamburgerMenu from "./hamburgerMenu/hamburgerMenu";

/**
 * Renders the appropriate navigation menu based on the device type
 * @constructor
 */
export default function Navigation(): ReactElement {
    const isMobile = isMobileDevice();

    return (
        <>
            {isMobile ? <HamburgerMenu/> : <NavBar/>}
        </>
    );
}
