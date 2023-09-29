import React, { ReactElement } from "react";
import './banner.scss';

interface BannerProps {
    imageSrc: string;
    imageAlt: string;
    message: string;
}

/**
 * Banner component
 * @param imageSrc
 * @param imageAlt
 * @param message
 * @constructor
 */
export default function Banner({
                                   imageSrc,
                                   imageAlt,
                                   message,
                               }: BannerProps): ReactElement {
    return (
        <div className={'banner-area'}>
            <div className={'hero-image-container'}>
                <img id={'hero-image'} src={imageSrc} alt={imageAlt} />
            </div>
            <div className={'banner-overlay'}>{message}</div>
        </div>
    );
}
