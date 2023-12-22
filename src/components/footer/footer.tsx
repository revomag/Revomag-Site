import {ReactElement} from "react";
import DesktopFooter from "./desktopFooter/desktopFooter";
import MobileFooter from "./mobileFooter/mobileFooter";

/**
 * Renders the appropriate footer based on the device type
 * @constructor
 */
export default function Footer(): ReactElement {
    return (
        <>
            <DesktopFooter/>
            <MobileFooter/>
        </>
    );
}
