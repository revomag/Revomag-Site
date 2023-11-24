import {ReactElement} from "react";
import Facebook from '../../assets/socialMediaIcons/facebook.svg';
import Instagram from '../../assets/socialMediaIcons/instagram.svg';
import LinkedIn from '../../assets/socialMediaIcons/linkedin.svg';
import './footer.scss';

export default function Footer(): ReactElement {
    return (
        <div className={'footer-section'}>
            <div className={'footer-contact-container'}>
                <div>
                    <a
                        href={"tel:805-453-1343"}
                        target={"_blank"}
                        rel={"noreferrer"}
                    >
                        805-453-1343
                    </a>
                </div>
                <div>
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
                    <a href={""} target={"_blank"} rel={"noreferrer"}>
                        <img src={Facebook} alt={'facebook link'}/>
                    </a>
                </div>
                <div className={'social-icon'}>
                    <a href={""} target={"_blank"} rel={"noreferrer"}>
                        <img src={Instagram} alt={'instagram link'}/>
                    </a>
                </div>
                <div className={'social-icon'}>
                    <a href={""} target={"_blank"} rel={"noreferrer"}>
                        <img src={LinkedIn} alt={'linkedin link'}/>
                    </a>
                </div>
            </div>
        </div>
    );
}
