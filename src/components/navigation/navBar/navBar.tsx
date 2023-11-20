import {ReactElement} from "react";
import {Link} from "react-router-dom";
import Logo from '../../../assets/MyoLogo.svg';
import './navBar.scss';

export default function NavBar(): ReactElement {
    return (
        <nav>
            <div className="nav-wrapper">
                <div className="logo-container">
                    <Link className={"logo-nav"} to={"/"}>
                        <img src={Logo} alt="logo" />
                    </Link>
                </div>
                <div className="nav-links">
                    <Link className={"nav-link"} to={"/home"}>
                        HOME
                    </Link>
                    <div className={"nav-dropdown"}>
                        INFORMATION
                        <div className={"nav-dropdown-content"}>
                            <Link className={"nav-link"} to={"/mouth-breathing"}>
                                MOUTH BREATHING
                            </Link>
                            <Link className={"nav-link"} to={"/snoring-and-sleep-apnea"}>
                                SNORING AND SLEEP APNEA
                            </Link>
                            <Link className={"nav-link"} to={"/adhd-and-sleep-disordered-breathing"}>
                                ADHD and Sleep Disordered Breathing
                            </Link>
                            <Link className={"nav-link"} to={"/tmj-pain"}>
                                TEMPORAL MANDIBULAR JOINT (TMJ) PAIN
                            </Link>
                        </div>
                    </div>
                    <Link className={"nav-link"} to={"/how-it-works"}>
                        HOW IT WORKS
                    </Link>
                    <Link className={"nav-link"} to={"/contact"}>
                        CONTACT
                    </Link>
                    <Link className={"nav-link"} to={"/about"}>
                        ABOUT NICOLE
                    </Link>
                    <Link className={"nav-link"} to={"/refer-a-patient"}>
                        REFER A PATIENT
                    </Link>
                    <Link className={"nav-link"} to={"/book-appointment"}>
                        BOOK APPOINTMENT
                    </Link>
                </div>
            </div>
        </nav>
    );
}
