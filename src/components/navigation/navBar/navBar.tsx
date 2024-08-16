import {ReactElement} from "react";
import {Link} from "react-router-dom";
import Logo from '../../../assets/RevomagLogotype.svg';
import './navBar.scss';

/**
 * Renders the desktop Nav Bar
 * @constructor
 */
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
                    <Link className={"nav-link"} to={"/how-it-works"}>
                        HOW IT WORKS
                    </Link>
                    <Link className={"nav-link"} to={"/contact"}>
                        CONTACT
                    </Link>
                    <Link className={"nav-link"} to={"/about"}>
                        ABOUT
                    </Link>
                    <Link className={"nav-link"} to={"/resources"}>
                        RESOURCES
                    </Link>
                </div>
            </div>
        </nav>
    );
}
