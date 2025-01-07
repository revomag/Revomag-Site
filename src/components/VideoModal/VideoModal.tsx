import React, { useState, useEffect } from 'react';
import './videoModal.scss';

interface VideoModalProps {
    videoId: string;
    text?: string;
    baseClassName?: string;
    displayType?: 'button' | 'text';
}

const VideoModal: React.FC<VideoModalProps> = ({
                                                   videoId,
                                                   text = "Play Video",
                                                   baseClassName,
                                                   displayType= 'button'
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

    const renderTrigger = () => {
        if (displayType === 'button') {
            return (
                <button
                    className={`mdl-btn ${baseClassName}-button`}
                    onClick={() => setIsOpen(true)}
                    aria-label={`Play ${text}`}
                >
                    {text}
                </button>
            );
        } else {
            return (
                <span
                    className={`mdl-txt ${baseClassName}-text`}
                    onClick={() => setIsOpen(true)}
                    style={{ cursor: 'pointer' }}
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => {
                        if (e.key === 'Enter' || e.key === ' ') {
                            e.preventDefault();
                            setIsOpen(true);
                        }
                    }}
                >
          {text}
        </span>
            );
        }
    };

    return (
        <>
            {renderTrigger()}

            {isOpen && (
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
                    <div
                        style={{
                            width: window.innerWidth <= 768 ? '100vw' : '70vw',
                            position: 'absolute',
                            backgroundColor: 'black',
                            borderRadius: '8px'
                        }}
                        onClick={e => e.stopPropagation()}
                    >
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