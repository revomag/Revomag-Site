import {ReactElement} from "react";
import {Link, useLocation} from "react-router-dom";
import Logo from '../../../assets/RevomagLogotypeWithTagline.png';
import './navBar.scss';

/**
 * Renders the desktop Nav Bar
 * @constructor
 */
export default function NavBar(): ReactElement {
    const location = useLocation();

    const navLinks = [
        { path: "/home", label: "HOME" },
        { path: "/products", label: "PRODUCTS" },
        { path: "/about", label: "ABOUT" },
        { path: "/resources", label: "RESOURCES" }
    ];

    return (
        <nav>
            <div className="nav-wrapper">
                <div className="logo-container">
                    <Link className={"logo-nav"} to={"/home"}>
                        <img src={Logo} alt="logo" />
                    </Link>
                </div>
                <div className="nav-links">
                    {navLinks.map((link) => {
                        const isActive = link.path === '/products'
                            ? location.pathname.startsWith('/products')
                            : location.pathname === link.path;
                        return (
                            <Link
                                key={link.path}
                                className={`nav-link ${isActive ? 'active' : ''}`}
                                to={link.path}
                            >
                                {link.label}
                            </Link>
                        );
                    })}
                </div>
            </div>
        </nav>
    );
}
