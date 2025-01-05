import React, { useState, useEffect } from 'react';
import './videoModal.scss';

interface VideoModalProps {
    videoId: string;
    buttonText?: string;
    buttonClassName?: string;
}

const VideoModal: React.FC<VideoModalProps> = ({
                                                   videoId,
                                                   buttonText = "Play Video",
                                                   buttonClassName = "px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                                               }) => {
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const handleEsc = (event: KeyboardEvent) => {
            if (event.key === 'Escape') setIsOpen(false);
        };

        if (isOpen) {
            document.addEventListener('keydown', handleEsc);
        }

        return () => {
            document.removeEventListener('keydown', handleEsc);
        };
    }, [isOpen]);

    return (
        <>
            <button
                className={`open-modal-button ${buttonClassName}`}
                onClick={() => setIsOpen(true)}
                aria-label={`Play ${buttonText}`}
            >
                {buttonText}
            </button>

            {isOpen && (
                // Overlay that covers the entire viewport
                <div
                    className="fixed inset-0 bg-black/30 z-50"
                    onClick={() => setIsOpen(false)}
                    style={{
                        position: 'fixed',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}
                >
                    {/* Video container */}
                    <div
                        style={{
                            width: '70vw',
                            position: 'absolute',
                            backgroundColor: 'black',
                            borderRadius: '8px'
                        }}
                        onClick={e => e.stopPropagation()}
                    >
                        {/* Close button - positioned over video corner */}
                        <button
                            style={{
                                position: 'absolute',
                                top: '8px',
                                right: '8px',
                                zIndex: 60,
                                color: 'white',
                                backgroundColor: 'rgba(0, 0, 0, 0.6)',
                                padding: '8px 12px',
                                borderRadius: '4px',
                                cursor: 'pointer',
                                transition: 'all 0.2s ease'
                            }}
                            onMouseOver={(e) => {
                                e.currentTarget.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
                                e.currentTarget.style.color = '#ddd';
                            }}
                            onMouseOut={(e) => {
                                e.currentTarget.style.backgroundColor = 'rgba(0, 0, 0, 0.6)';
                                e.currentTarget.style.color = 'white';
                            }}
                            onClick={() => setIsOpen(false)}
                            aria-label="Close video"
                        >
                            ✕
                        </button>

                        {/* Video wrapper with 16:9 aspect ratio */}
                        <div style={{ position: 'relative', paddingTop: '56.25%' }}>
                            <iframe
                                style={{
                                    position: 'absolute',
                                    top: 0,
                                    left: 0,
                                    width: '100%',
                                    height: '100%',
                                    borderRadius: '8px'
                                }}
                                src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1&vq=hd1080`}
                                title="YouTube video player"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            />
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default VideoModal;