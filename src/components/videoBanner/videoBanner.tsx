import { ReactElement, useRef, useEffect, useState } from 'react';
import './videoBanner.scss';

interface VideoBannerProps {
    videoSrc: string;
    message?: string;
    onVideoLoad?: () => void; // Callback function for when the video has loaded
}

/**
 * Video Banner component
 * @param videoSrc
 * @param message
 * @param onVideoLoad
 * @constructor
 */
export default function VideoBanner({
                                        videoSrc,
                                        message,
                                        onVideoLoad,
                                    }: VideoBannerProps): ReactElement {
    const videoRef = useRef<HTMLVideoElement | null>(null);
    const [isVideoLoaded, setIsVideoLoaded] = useState(false);

    const setPlayBack = () => {
        if (videoRef.current) {
            videoRef.current!.playbackRate = 0.7;
        }
    };

    const handleCanPlay = () => {
        setIsVideoLoaded(true);

        // Call the onVideoLoad callback if provided
        if (onVideoLoad) {
            onVideoLoad();
        }
    };

    useEffect(() => {
        if (videoRef.current) {
            videoRef.current!.addEventListener('canplay', handleCanPlay);
        }

        return () => {
            if (videoRef.current) {
                videoRef.current!.removeEventListener('canplay', handleCanPlay);
            }
        };
    }, []);

    return (
        <div className={'video-banner-area'}>
            <div className={'hero-image-container'}>
                {isVideoLoaded ? (
                    <video
                        id="hero-image"
                        playsInline
                        autoPlay
                        muted
                        loop
                        ref={videoRef}
                        src={videoSrc}
                        onCanPlay={() => setPlayBack()}
                    >
                        <source src={videoSrc} type="video/mp4" />
                    </video>
                ) : null}
            </div>
            <div className={'video-banner-overlay'}>{message}</div>
        </div>
    );
}
