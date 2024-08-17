import {ReactElement} from "react";
import SimpleButton from "../../simpleButton/simpleButton";
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
                        <div className={'footer-phone-container'}>
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
                        <div className={'footer-email-container'}>
                            <a href="mailto:contact@getrevomag.com">
                                <img src={Email} alt={'Address drop pin'}/>
                            </a>
                            <a href="mailto:contact@getrevomag.com">
                                contact@getrevomag.com
                            </a>
                        </div>
                        <div className={'footer-address-container'}>
                            <a
                                href={""}
                                target={"_blank"}
                                rel={"noreferrer"}
                            >
                                <img src={Address} alt={'Address drop pin'}/>
                            </a>
                            <a
                                href={""}
                                target={"_blank"}
                                rel={"noreferrer"}
                            >
                                Someplace in Massachusetts
                            </a>
                        </div>
                    </div>
                    <div className={'footer-social-media-container'}>
                        <div className={'social-icon'}>
                            <a
                                href={"https://www.facebook.com/profile.php?id=61554085960201"}
                                target={"_blank"}
                                rel={"noreferrer"}
                            >
                                <img src={Facebook} alt={'facebook link'}/>
                            </a>
                        </div>
                        <div className={'social-icon'}>
                            <a
                                href={"https://www.instagram.com/santabarbara.myo/?igshid=OGQ5ZDc2ODk2ZA%3D%3D&utm_source=qr"}
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
                    {/*Book an Appointment through Simple Practice*/}
                    <SimpleButton
                        buttonText={'Buy RevoMag'}
                        destination={'https://hushforms.com/santabarbaramyo_consultation'}
                    />
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
                    <div className={'footer-sitemap-connect'}>
                        <h4>Connect</h4>
                        <ul>
                            <li>
                                <a href={'/contact'}>Contact</a>
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
