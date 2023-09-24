import React from "react";
import {Link} from "react-router-dom";
import Logo from '../../../favicon.ico/apple-touch-icon.png';
import './navBar.scss';

const NavBar: React.FC = () => {
    return (
        <nav>
            <div className="nav-wrapper">
                <div className="logo-container">
                    <Link className={"logo-nav"} to={"/"} style={{textDecoration: "none"}}>
                        <img src={Logo} alt="logo"/>
                    </Link>
                </div>
                <div className="nav-links">
                    <Link className={"nav-link"} to={"/home"} style={{textDecoration: "none"}}>
                        HOME
                    </Link>
                    <Link className={"nav-link"} to={"/information"} style={{textDecoration: "none"}}>
                        INFORMATION
                    </Link>
                    <Link className={"nav-link"} to={"/how-it-works"} style={{textDecoration: "none"}}>
                        HOW IT WORKS
                    </Link>
                    <Link className={"nav-link"} to={"/contact"} style={{textDecoration: "none"}}>
                        CONTACT
                    </Link>
                    <Link className={"nav-link"} to={"/about"} style={{textDecoration: "none"}}>
                        ABOUT NICOLE
                    </Link>
                    <Link className={"nav-link"} to={"/refer-a-patient"} style={{textDecoration: "none"}}>
                        REFER A PATIENT
                    </Link>
                    <Link className={'nav-link'} to={'/resources'} style={{textDecoration: 'none'}}>
                        RESOURCES
                    </Link>
                    <Link className={"nav-link"} to={"/book-appointment"} style={{textDecoration: "none"}}>
                        BOOK APPOINTMENT
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default NavBar;
