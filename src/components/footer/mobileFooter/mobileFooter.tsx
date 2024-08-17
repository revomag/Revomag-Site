import {ReactElement} from "react";
import SimpleButton from "../../simpleButton/simpleButton";
import Facebook from '../../../assets/icons/facebook.svg';
import Instagram from '../../../assets/icons/instagram.svg';
import Address from '../../../assets/icons/address.png';
import Phone from '../../../assets/icons/phone.png';
import Email from '../../../assets/icons/email.png';
import './mobileFooter.scss';

/**
 * Renders the DesktopFooter component
 * @constructor
 */
export default function MobileFooter(): ReactElement {
    return (
        <div className={'mobile-footer-section'}>
            <div className={'mobile-footer-content-wrapper'}>
                <div className={'mobile-footer-book-appointment'}>
                    <h2>Ready To Learn More?</h2>
                    {/*Book an Appointment through Simple Practice*/}
                    <SimpleButton
                        buttonText={'Request a Consultation'}
                        destination={'https://hushforms.com/getrevomag_consultation'}
                    />
                </div>
                <div className={'mobile-footer-contact-container'}>
                    <div className={'mobile-footer-phone-container'}>
                        <a
                            href={"tel:719-648-5582"}
                            target={"_blank"}
                            rel={"noreferrer"}
                        >
                            <img src={Phone} alt={'Address drop pin'}/>
                        </a>
                        <a
                            href={"tel:719-648-5582"}
                            target={"_blank"}
                            rel={"noreferrer"}
                        >
                            719-648-5582
                        </a>
                    </div>
                    <div className={'mobile-footer-email-container'}>
                        <a href="mailto:contact@getrevomag.com">
                            <img src={Email} alt={'Address drop pin'}/>
                        </a>
                        <a href="mailto:contact@getrevomag.com">
                            contact@getrevomag.com
                        </a>
                    </div>
                    <div className={'mobile-footer-address-container'}>
                        <img src={Address} alt={'Address drop pin'}/>
                        <a
                            href={""}
                            target={"_blank"}
                            rel={"noreferrer"}
                        >
                            Someplace in Massachusetts
                        </a>
                    </div>
                </div>
                <div className={'mobile-footer-social-media-container'}>
                    <div className={'social-icon'}>
                        <a
                            href={""}
                            target={"_blank"}
                            rel={"noreferrer"}
                        >
                            <img src={Facebook} alt={'facebook link'}/>
                        </a>
                    </div>
                    <div className={'social-icon'}>
                        <a
                            href={""}
                            target={"_blank"}
                            rel={"noreferrer"}
                        >
                            <img src={Instagram} alt={'instagram link'}/>
                        </a>
                    </div>
                </div>
                <div className={'tablet-footer-sitemap-container'}>
                    <div className={'mobile-footer-sitemap-general'}>
                        <h4>General</h4>
                        <ul>
                            <li>
                                <a href={'/home'}>Home</a>
                            </li>
                            <li>
                                <a href={'/about'}>About</a>
                            </li>
                        </ul>
                    </div>
                    <div className={'mobile-footer-sitemap-information'}>
                        <h4>Information</h4>
                        <ul>
                            <li>
                                <a href={'/resources'}>Resources</a>
                            </li>
                        </ul>
                    </div>
                    <div className={'mobile-footer-sitemap-connect'}>
                        <h4>Connect</h4>
                        <ul>
                            <li>
                                <a href={'/contact'}>Contact</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className={'mobile-footer-sitemap-container'}>
                    <div>
                        <a href={'/home'}>Home</a><span> | </span>
                        <a href={'/about'}>About</a><span> | </span>
                    </div>
                    <div>
                        <a href={'/resources'}>Resources</a><span> | </span>
                        <a href={'/contact'}>Contact</a>
                    </div>
                </div>
            </div>
            <div className={'mobile-footer-links'}>
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
