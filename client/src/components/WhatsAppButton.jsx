import React from 'react';
import { MessageCircle } from 'lucide-react';

const WhatsAppButton = () => {
    const phoneNumber = "917290909571";
    const whatsappUrl = `https://wa.me/${phoneNumber}`;

    return (
        <>
            <style>{`
                @keyframes waPulse {
                    0% {
                        box-shadow: 0 0 0 0 rgba(37, 211, 102, 0.6), 0 0 0 0 rgba(37, 211, 102, 0.3);
                    }
                    70% {
                        box-shadow: 0 0 0 16px rgba(37, 211, 102, 0), 0 0 0 32px rgba(37, 211, 102, 0);
                    }
                    100% {
                        box-shadow: 0 0 0 0 rgba(37, 211, 102, 0), 0 0 0 0 rgba(37, 211, 102, 0);
                    }
                }

                @keyframes waShimmer {
                    0% { transform: translate(-100%, -100%) rotate(-45deg); }
                    100% { transform: translate(100%, 100%) rotate(-45deg); }
                }

                @keyframes waFloat {
                    0%, 100% { transform: translateY(0) scale(1); }
                    50% { transform: translateY(-6px) scale(1.03); }
                }

                .wa-floating-btn {
                    position: fixed;
                    bottom: 16px;
                    right: 16px;
                    z-index: 50;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    width: 48px;
                    height: 48px;
                    background-color: #25D366;
                    color: white;
                    border-radius: 50%;
                    box-shadow: 0 8px 30px rgba(37, 211, 102, 0.4);
                    transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
                    cursor: pointer;
                    animation: waFloat 3.5s ease-in-out infinite, waPulse 2s infinite;
                    border: 2px solid rgba(255, 255, 255, 0.15);
                    overflow: hidden;
                    text-decoration: none;
                }

                @media (min-width: 576px) {
                    .wa-floating-btn {
                        width: 54px;
                        height: 54px;
                        bottom: 24px;
                        right: 24px;
                    }
                }

                @media (min-width: 768px) {
                    .wa-floating-btn {
                        width: 64px;
                        height: 64px;
                        bottom: 32px;
                        right: 32px;
                        z-index: 9999;
                    }
                }

                .wa-floating-btn:hover {
                    background-color: #20ba5a;
                    transform: scale(1.1) translateY(-3px) !important;
                    box-shadow: 0 12px 35px rgba(37, 211, 102, 0.6);
                }

                .wa-floating-btn::after {
                    content: '';
                    position: absolute;
                    top: -50%;
                    left: -50%;
                    width: 200%;
                    height: 200%;
                    background: linear-gradient(
                        45deg,
                        transparent 45%,
                        rgba(255, 255, 255, 0.4) 50%,
                        transparent 55%
                    );
                    transform: rotate(-45deg);
                    animation: waShimmer 3.2s infinite ease-in-out;
                }

                .wa-tooltip {
                    position: absolute;
                    right: 76px;
                    background: rgba(18, 18, 18, 0.95);
                    border: 1px solid rgba(37, 211, 102, 0.3);
                    color: white;
                    padding: 8px 14px;
                    border-radius: 12px;
                    font-size: 13px;
                    font-weight: 700;
                    white-space: nowrap;
                    opacity: 0;
                    visibility: hidden;
                    transform: translateX(10px);
                    transition: all 0.3s ease;
                    box-shadow: 0 8px 24px rgba(0,0,0,0.25);
                    display: flex;
                    align-items: center;
                    gap: 6px;
                    pointer-events: none;
                }

                @media (min-width: 768px) {
                    .wa-tooltip {
                        right: 84px;
                    }
                }

                .wa-group:hover .wa-tooltip {
                    opacity: 1;
                    visibility: visible;
                    transform: translateX(0);
                }

                .wa-tooltip-pulse {
                    width: 8px;
                    height: 8px;
                    background-color: #25D366;
                    border-radius: 50%;
                    animation: waPulse 1.5s infinite;
                }
            `}</style>

            <div className="wa-group" style={{ pointerEvents: 'auto' }}>
                <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="wa-floating-btn"
                    title="Chat with us on WhatsApp"
                >
                    <MessageCircle size={32} style={{ filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.15))' }} />
                    <div className="wa-tooltip">
                        <div className="wa-tooltip-pulse" />
                        Chat with us
                    </div>
                </a>
            </div>
        </>
    );
};

export default WhatsAppButton;
