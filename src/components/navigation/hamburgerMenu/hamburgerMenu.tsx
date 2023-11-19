import {ReactElement, useState} from "react";
import {Link} from "react-router-dom";
import Logo from "../../../assets/MyoLogo.svg";
import './hamburgerMenu.scss';

/**
 * Renders hamburger menu for mobile and tablet scree sizes
 * @constructor
 */
export default function HamburgerMenu(): ReactElement {
    const [hamburgerToggle, setHamburgerToggle] = useState("open");
    const [hamburgerToggleIcon, setHamburgerToggleIcon] = useState("hamburger-toggle");

    // Open and close hamburger menu
    const handleHamburgerToggle = () => {
        const toggle = document.getElementById('toggle');
        if (toggle && toggle.className === "open") {
            setHamburgerToggle("opening");
            setHamburgerToggleIcon('hamburger-toggle opening');
        }
        else {
            setHamburgerToggle("open");
            setHamburgerToggleIcon('hamburger-toggle');
        }
    };

    return (
        <div id={"hamburger-wrapper"}>
            <div id="hamburger">
                <div className={hamburgerToggleIcon} onClick={handleHamburgerToggle}>
                    <div className="hamburger-icon"/>
                </div>
                <ul id={'toggle'} className={hamburgerToggle}>
                    <li>
                        <Link className={"ham-nav-link"} to={"/home"}>
                            HOME
                        </Link>
                    </li>
                    <li>
                        <Link className={"ham-nav-link"} to={"/how-it-works"}>
                            HOW IT WORKS
                        </Link>
                    </li>
                    <li>
                        <Link className={"ham-nav-link"} to={"/book-appointment"}>
                            BOOK APPOINTMENT
                        </Link>
                    </li>
                    <li>
                        <Link className={"ham-nav-link"} to={"/contact"}>
                            CONTACT
                        </Link>
                    </li>
                    <li>
                        <Link className={"ham-nav-link"} to={"/about"}>
                            ABOUT NICOLE
                        </Link>
                    </li>
                    <li>
                        <Link className={"ham-nav-link"} to={"/refer-a-patient"}>
                            REFER A PATIENT
                        </Link>
                    </li>
                    <li>
                        <div className={'ham-add-info'}>
                            Additional Information:
                        </div>
                    </li>
                    <li>
                        <Link className={"ham-nav-link ham-add-info-link"} to={"/mouth-breathing"}>
                            Mouth Breathing
                        </Link>
                    </li>
                    <li>
                        <Link className={"ham-nav-link ham-add-info-link"} to={"/snoring-and-sleep-apnea"}>
                            Snoring and Sleep Apnea
                        </Link>
                    </li>
                </ul>
            </div>
            <div className="ham-logo-container">
                <Link className={"ham-logo-nav"} to={"/"} style={{textDecoration: "none"}}>
                    <img src={Logo} alt="logo" />
                </Link>
            </div>
        </div>
    );
}
