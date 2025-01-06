import React, { useState, useEffect } from 'react';

interface VideoModalProps {
    videoId: string;
    buttonText?: string;
}

const VideoModal: React.FC<VideoModalProps> = ({
                                                   videoId,
                                                   buttonText = "Play Video"
                                               }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [isHovered, setIsHovered] = useState(false);

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

    const buttonStyle = {
        display: 'inline-block',
        width: isHovered ? '330px' : '325px',
        height: isHovered ? '56px' : '50px',
        padding: '10px',
        margin: '10px',
        marginTop: isHovered ? '7px' : '10px',
        marginBottom: isHovered ? '7px' : '10px',
        color: '#fff',
        background: isHovered ? '#da5802' : '#FE6A09',
        border: 0,
        borderRadius: '4px',
        fontSize: '16px',
        fontWeight: 600,
        textDecoration: 'none',
        cursor: isHovered ? 'pointer' : 'default',
        transition: 'all 0.2s ease'
    };

    return (
        <>
            <button
                style={buttonStyle}
                onClick={() => setIsOpen(true)}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                aria-label={`Play ${buttonText}`}
            >
                {buttonText}
            </button>

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