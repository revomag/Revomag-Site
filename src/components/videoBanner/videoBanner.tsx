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

    const videoRef = useRef<HTMLVideoElement | null>(null);

    const setPlayBack = () => {
        if (videoRef.current) {
            videoRef.current!.playbackRate = 0.7;
        }
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
