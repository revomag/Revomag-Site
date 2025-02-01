import {ReactElement} from "react";
import SimpleButton from "../../simpleButton/simpleButton";
import Instagram from '../../../assets/icons/instagram-white-icon.png';
import Email from '../../../assets/icons/email.png';
import './mobileFooter.scss';
import X from "../../../assets/icons/twitter-x-16.png";
import YouTube from "../../../assets/icons/youtube-app-white-icon.png";
import Facebook from "../../../assets/icons/facebook-16.png";
import Rumble from "../../../assets/icons/icons8-rumble-24.png";

/**
 * Renders the DesktopFooter component
 * @constructor
 */
export default function MobileFooter(): ReactElement {
    return (
        <div className={'mobile-footer-section'}>
            <div className={'mobile-footer-content-wrapper'}>
                <div className={'mobile-footer-book-appointment'}>
                    <h2>Ready for a better Revolver Reload?</h2>
                    <SimpleButton
                        buttonText={'Get Revomag'}
                        destination={'/products'}
                    />
                </div>
                <div className={'mobile-footer-contact-container'}>
                    <div className={'mobile-footer-email-container'}>
                        <a href="mailto:contact@getrevomag.com">
                            <img src={Email} alt={'Address drop pin'}/>
                        </a>
                        <a href="mailto:contact@getrevomag.com">
                            contact@getrevomag.com
                        </a>
                    </div>
                </div>
                <div className={'mobile-footer-social-media-container'}>
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
                <div className={'tablet-footer-sitemap-container'}>
                    <div className={'mobile-footer-sitemap-general'}>
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
                    <div className={'mobile-footer-sitemap-information'}>
                        <h4>Information</h4>
                        <ul>
                            <li>
                                <a href={'/resources'}>Resources</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className={'mobile-footer-sitemap-container'}>
                    <div>
                        <a href={'/home'}>Home</a><span> | </span>
                        <a href={'/products'}>Products</a><span> | </span>
                        <a href={'/about'}>About</a>
                    </div>
                    <div>
                        <a href={'/resources'}>Resources</a>
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
