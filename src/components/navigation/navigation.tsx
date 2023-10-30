import {ReactElement} from "react";
import NavBar from "./navBar/navBar";
import HamburgerMenu from "./hamburgerMenu/hamburgerMenu";

/**
 * Renders the appropriate navigation menu base on device type
 * @constructor
 */
export default function Navigation(): ReactElement {
    const deviceDetails = navigator.userAgent;
    const regExpList = /android|iphone|kindle|ipad|mobile/i;
    const isMobileDevice = regExpList.test(deviceDetails);

    return (
        <>
            {isMobileDevice ? <HamburgerMenu/> : <NavBar/>}
        </>
    );
}
