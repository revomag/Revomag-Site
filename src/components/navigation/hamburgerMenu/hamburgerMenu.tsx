import {ReactElement, useState} from "react";
import {Link} from "react-router-dom";
import Logo from "../../../assets/navLogo.png";
import RightChevron from "../../../assets/chevron-right-icon.svg";
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
                        <Link className={"ham-nav-link"} to={"/home"} style={{textDecoration: "none"}}>
                            HOME
                        </Link>
                    </li>
                    <li>
                        <Link className={"ham-nav-link"} to={"/how-it-works"} style={{textDecoration: "none"}}>
                            HOW IT WORKS
                        </Link>
                    </li>
                    <li>
                        <Link className={"ham-nav-link"} to={"/contact"} style={{textDecoration: "none"}}>
                            CONTACT
                        </Link>
                    </li>
                    <li>
                        <Link className={"ham-nav-link"} to={"/about"} style={{textDecoration: "none"}}>
                            ABOUT NICOLE
                        </Link>
                    </li>
                    <li>
                        <Link className={"ham-nav-link"} to={"/refer-a-patient"} style={{textDecoration: "none"}}>
                            REFER A PATIENT
                        </Link>
                    </li>
                    <li>
                        <Link className={'ham-nav-link'} to={'/resources'} style={{textDecoration: 'none'}}>
                            RESOURCES
                        </Link>
                    </li>
                    <li>
                        <Link className={"ham-nav-link"} to={"/book-appointment"} style={{textDecoration: "none"}}>
                            BOOK APPOINTMENT
                        </Link>
                    </li>
                    <li>
                        <div className={"ham-nav-dropdown-content ham-nav-link"}>
                            INFORMATION <img className={"ham-chevron"} src={RightChevron} alt={"right chevron"}/>
                        </div>
                        <ul className={"ham-nav-dropdown"}>
                            <li className={"nav-dropdown-content"}>
                                <Link className={"ham-nav-link"}>
                                    MOUTH BREATHING
                                </Link>
                            </li>
                        </ul>
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
