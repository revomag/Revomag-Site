import React, {ReactElement} from "react";
import Facebook from '../../assets/socialMediaIcons/facebook.svg';
import Instagram from '../../assets/socialMediaIcons/instagram.svg';
import LinkedIn from '../../assets/socialMediaIcons/linkedin.svg';
import './footer.scss';

export default function Footer(): ReactElement {
    return (
        <div className={'footer-section'}>
            <p>This is where the office address would go.</p>
            <br/><br/>
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
