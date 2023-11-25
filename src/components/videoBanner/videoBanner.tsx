import {ReactElement, useRef} from "react";
import './videoBanner.scss';

interface VideoBannerProps {
    videoSrc: string;
    message?: string;
}

/**
 * Video Banner component
 * @param imageSrc
 * @param message
 * @constructor
 */
export default function VideoBanner({
                                   videoSrc,
                                   message,
                               }: VideoBannerProps): ReactElement {

    const videoRef = useRef();
    const setPlayBack = () => {
        videoRef.current.playbackRate = 0.6;
    };

    return (
        <div className={'video-banner-area'}>
            <div className={'hero-image-container'}>
                <video
                    id="hero-image"
                    playsInline autoPlay muted loop
                    ref={videoRef}
                    src={videoSrc}
                    onCanPlay={() => setPlayBack()}>
                    <source src={videoSrc} type="video/mp4" />
                </video>
            </div>
            <div className={'video-banner-overlay'}>{message}</div>
        </div>
    );
}
