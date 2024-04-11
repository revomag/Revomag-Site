import {ReactElement} from "react";
import SimpleButton from "../../simpleButton/simpleButton";
import Facebook from '../../../assets/icons/facebook.svg';
import Instagram from '../../../assets/icons/instagram.svg';
import LinkedIn from '../../../assets/icons/linkedin.svg';
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
                                href={"tel:805-453-1343"}
                                target={"_blank"}
                                rel={"noreferrer"}
                            >
                                <img src={Phone} alt={'Address drop pin'}/>
                            </a>
                            <a
                                href={"tel:805-453-1343"}
                                target={"_blank"}
                                rel={"noreferrer"}
                            >
                                805-453-1343
                            </a>
                        </div>
                        <div className={'footer-email-container'}>
                            <a href="mailto:nicole@santabarbaramyo.com">
                                <img src={Email} alt={'Address drop pin'}/>
                            </a>
                            <a href="mailto:nicole@santabarbaramyo.com">
                                nicole@santabarbaramyo.com
                            </a>
                        </div>
                        <div className={'footer-address-container'}>
                            <a
                                href={"https://www.google.com/maps/search/?api=1&query=5290%20Overpass%20Road%20Suite%20211%20Santa%20Barbara%2C%20California%2C%2093111"}
                                target={"_blank"}
                                rel={"noreferrer"}
                            >
                                <img src={Address} alt={'Address drop pin'}/>
                            </a>
                            <a
                                href={"https://www.google.com/maps/search/?api=1&query=5290%20Overpass%20Road%20Suite%20211%20Santa%20Barbara%2C%20California%2C%2093111"}
                                target={"_blank"}
                                rel={"noreferrer"}
                            >
                                5290 Overpass Road Suite 211, Santa Barbara CA 93111
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
                        {/*<div className={'social-icon'}>*/}
                        {/*    <a*/}
                        {/*        href={"https://www.linkedin.com/company/santa-barbara-myo/"}*/}
                        {/*        target={"_blank"}*/}
                        {/*        rel={"noreferrer"}*/}
                        {/*    >*/}
                        {/*        <img src={LinkedIn} alt={'linkedin link'}/>*/}
                        {/*    </a>*/}
                        {/*</div>*/}
                    </div>
                </div>
                <div className={'footer-divider'}/>
                <div className={'footer-content-right'}>
                    <h2>Ready To Learn More?</h2>
                    {/*Book an Appointment through Simple Practice*/}
                    <SimpleButton
                        buttonText={'Request a Consultation'}
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
                                <a href={'/how-it-works'}>How It Works</a>
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
                                <a href={'/mouth-breathing'}>Mouth Breathing</a>
                            </li>
                            <li>
                                <a href={'/snoring-and-sleep-apnea'}>Snoring/Sleep Apnea</a>
                            </li>
                            <li>
                                <a href={'/adhd-and-sleep-disordered-breathing'}>ADHD</a>
                            </li>
                            <li>
                                <a href={'/tmj-pain'}>TMJ Pain</a>
                            </li>
                            <li>
                                <a href={'/tongue-tie'}>Tongue Tie</a>
                            </li>
                            <li>
                                <a href={'/thumb-and-finger-sucking'}>Thumb Sucking</a>
                            </li>
                            <li>
                                <a href={'/tongue-thrust'}>Tongue Thrust</a>
                            </li>
                            <li>
                                <a href={'/resources'}>Resources</a>
                            </li>
                        </ul>
                    </div>
                    <div className={'footer-sitemap-connect'}>
                        <h4>Connect</h4>
                        <ul>
                            <li>
                                <a href={'/book-appointment'}>Schedule Appointment</a>
                            </li>
                            <li>
                                <a href={'/refer'}>Refer a Patient</a>
                            </li>
                            <li>
                                <a href={'/contact'}>Contact</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className={'footer-right-links'}>
                <div>
                    <span>&copy; Santa Barbara Myo 2023  |  </span>
                    <a href={'/disclaimer'}>Disclaimer</a>
                    <span>  |  </span>
                    <a href={'/privacy'}>Privacy</a>
                </div>
            </div>
        </div>
    );
}
