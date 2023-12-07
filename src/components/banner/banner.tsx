import { ReactElement } from "react";
import './banner.scss';

interface BannerProps {
    imageSrc: string;
    imageAlt: string;
    imageTitle: string;
    className?: string;
}

/**
 * Banner component
 * @param imageSrc
 * @param imageAlt
 * @param message
 * @param className
 * @constructor
 */
export default function Banner({
                                   imageSrc,
                                   imageAlt,
                                   imageTitle,
                                   className,
                               }: BannerProps): ReactElement {
    return (
        <div className={'banner-area'}>
            <div className={'hero-image-container'}>
                <img id={'hero-image ' + className} src={imageSrc} alt={imageAlt} title={imageTitle} />
            </div>
        </div>
    );
}
