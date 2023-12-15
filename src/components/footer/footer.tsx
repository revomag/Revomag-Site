import {ReactElement} from "react";
import SimplePracticeWidget from "../simplePracticeWidget/simplePracticeWidget";
import Facebook from '../../assets/icons/facebook.svg';
import Instagram from '../../assets/icons/instagram.svg';
import LinkedIn from '../../assets/icons/linkedin.svg';
import Address from '../../assets/icons/address.png';
import Phone from '../../assets/icons/phone.png';
import Email from '../../assets/icons/email.png';
import './footer.scss';

/**
 * Renders the Footer component
 * @constructor
 */
export default function Footer(): ReactElement {
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
                        <div className={'social-icon'}>
                            <a
                                href={"https://www.linkedin.com/company/santa-barbara-myo/"}
                                target={"_blank"}
                                rel={"noreferrer"}
                            >
                                <img src={LinkedIn} alt={'linkedin link'}/>
                            </a>
                        </div>
                    </div>
                </div>
                <div className={'footer-divider'}/>
                <div className={'footer-content-right'}>
                    <h2>Ready To Learn More?</h2>
                    {/*Book an Appointment through Simple Practice*/}
                    <SimplePracticeWidget
                        buttonText={'Schedule an Appointment'}
                        href={"https://nicole-cantello.clientsecure.me"}
                    />
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
