import {ReactElement} from "react";
import BuyButton from "../../products/BuyButton";
import Instagram from '../../../assets/icons/instagram-white-icon.png';
import X from '../../../assets/icons/twitter-x-16.png';
import Facebook from '../../../assets/icons/facebook-16.png';
import Email from '../../../assets/icons/email.png';
import YouTube from '../../../assets/icons/youtube-app-white-icon.png';
import Rumble from '../../../assets/icons/icons8-rumble-24.png';
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
                        <div className={'social-icon'}>
                            <a
                                href={"https://x.com/Revomagusa"}
                                target={"_blank"}
                                rel={"noreferrer"}
                            >
                                <img src={X} alt={'X link'}/>
                            </a>
                        </div>
                        <div className={'social-icon'}>
                            <a
                                href={"https://www.youtube.com/@getRevomag"}
                                target={"_blank"}
                                rel={"noreferrer"}
                            >
                                <img src={YouTube} alt={'YouTube link'}/>
                            </a>
                        </div>
                        <div className={'social-icon'}>
                            <a
                                href={"https://www.facebook.com/profile.php?id=61572692010797"}
                                target={"_blank"}
                                rel={"noreferrer"}
                            >
                                <img src={Facebook} alt={'facebook link'}/>
                            </a>
                        </div>
                        <div className={'social-icon'}>
                            <a
                                href={"https://rumble.com/c/c-7481551"}
                                target={"_blank"}
                                rel={"noreferrer"}
                            >
                                <img src={Rumble} alt={'rumble link'}/>
                            </a>
                        </div>
                    </div>
                </div>
                <div className={'footer-divider'}/>
                <div className={'footer-content-center'}>
                    <h2>Ready for a better Revolver Reload?</h2>
                    <div id={'footer-buy-now-container'}>
                        <BuyButton
                            buttonText={'Get Revomag'}
                            className="footer-buy-button"
                        />
                    </div>
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
