import {ReactElement} from "react";
import GetRevomagProductButton from "../../shopifyButtons/getRevomag";
import Facebook from '../../../assets/icons/facebook.svg';
import Instagram from '../../../assets/icons/instagram.svg';
import Address from '../../../assets/icons/address.png';
import Phone from '../../../assets/icons/phone.png';
import Email from '../../../assets/icons/email.png';
import './desktopFooter.scss';

/**
 * Renders the DesktopFooter component
 * @constructor
 */
export default function DesktopFooter(): ReactElement {
    return (
        <div className={'footer-section'}>
            <div className={'footer-content-wrapper'}>
                <div className={'footer-content-left'}>
                    <div className={'footer-contact-container'}>
                        <div className={'footer-email-container'}>
                            <a href="mailto:contact@getrevomag.com">
                                <img src={Email} alt={'Address drop pin'}/>
                            </a>
                            <a href="mailto:contact@getrevomag.com">
                                contact@getrevomag.com
                            </a>
                        </div>
                    </div>
                    <div className={'footer-social-media-container'}>
                        <div className={'social-icon'}>
                            <a
                                href={"https://www.instagram.com/revomagusa/"}
                                target={"_blank"}
                                rel={"noreferrer"}
                            >
                                <img src={Instagram} alt={'instagram link'}/>
                            </a>
                        </div>
                    </div>
                </div>
                <div className={'footer-divider'}/>
                <div className={'footer-content-right'}>
                    <h2>Ready for a better Revolver Reload?</h2>
                    <GetRevomagProductButton/>
                </div>
                <div className={'footer-divider'}/>
                <div className={'footer-sitemap-container'}>
                    <div className={'footer-sitemap-general'}>
                        <h4>General</h4>
                        <ul>
                            <li>
                                <a href={'/home'}>Home</a>
                            </li>
                            <li>
                                <a href={'/products'}>Products</a>
                            </li>
                            <li>
                                <a href={'/about'}>About</a>
                            </li>
                        </ul>
                    </div>
                    <div className={'footer-sitemap-information'}>
                        <h4>Information</h4>
                        <ul>
                            <li>
                                <a href={'/resources'}>Resources</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className={'footer-right-links'}>
                <div>
                    <span>&copy; Goodlee CO 2024  |  </span>
                    <a href={'/disclaimer'}>Disclaimer</a>
                    <span>  |  </span>
                    <a href={'/privacy'}>Privacy</a>
                </div>
            </div>
        </div>
    );
}
