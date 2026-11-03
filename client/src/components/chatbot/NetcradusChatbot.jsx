import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Send, X, ArrowRight } from 'lucide-react';
import { chatbotKnowledge } from './chatbotKnowledge';

const NetcradusChatbot = () => {
    const navigate = useNavigate();
    const [isChatOpen, setIsChatOpen] = useState(false);
    const [lastIntent, setLastIntent] = useState(null);
    const [messages, setMessages] = useState([
        {
            id: 1,
            sender: "bot",
            text: "Hi! 👋 Welcome to Netcradus.\n\nI'm the Netcradus Assistant. How can I help you today?",
            actions: []
        }
    ]);
    const [inputValue, setInputValue] = useState("");
    const messagesContainerRef = useRef(null);

    // Auto scroll conversation to bottom inside container when new messages are added
    useEffect(() => {
        if (isChatOpen && messagesContainerRef.current) {
            const container = messagesContainerRef.current;
            const scrollTimeout = setTimeout(() => {
                container.scrollTo({
                    top: container.scrollHeight,
                    behavior: 'smooth'
                });
            }, 50);
            return () => clearTimeout(scrollTimeout);
        }
    }, [messages, isChatOpen]);

    // Text preprocessing, normalization, typo mapping and synonyms
    const normalizeText = (text) => {
        return text
            .toLowerCase()
            .replace(/[^\w\s-]/g, " ")
            .replace(/\s+/g, " ")
            .trim();
    };

    const replacements = {
        "cyber securty": "cyber security",
        "cybersecurty": "cybersecurity",
        "penitration": "penetration",
        "assesment": "assessment",
        "securty": "security"
    };

    const synonyms = {
        pentest: "penetration testing",
        "pen test": "penetration testing",
        soc: "security operations center",
        iam: "identity access management",
        vuln: "vulnerability",
        cyber: "cybersecurity"
    };

    const preprocessText = (text) => {
        let normalized = normalizeText(text);

        for (const [key, replacement] of Object.entries(replacements)) {
            if (normalized.includes(key)) {
                normalized = normalized.replace(new RegExp(key, 'g'), replacement);
            }
        }

        const tokens = normalized.split(" ");
        const mappedTokens = tokens.map(token => synonyms[token] || token);

        return {
            normalized: mappedTokens.join(" "),
            tokens: mappedTokens
        };
    };

    // Calculate intent score based on weights
    const calculateIntentScore = (processed, intentItem) => {
        const { normalized, tokens } = processed;
        let score = 0;

        // Negative keywords (e.g. avoid 'ai' intent matching 'maintain', 'email', 'domain')
        if (intentItem.negativeKeywords) {
            for (const neg of intentItem.negativeKeywords) {
                const regex = new RegExp(`\\b${neg}\\b`, 'i');
                if (regex.test(normalized)) {
                    return -8;
                }
            }
        }

        // 1. Exact phrase match (+10)
        for (const phrase of intentItem.phrases) {
            if (normalized === phrase) {
                score += 10;
                break;
            }
        }

        // 2. Contained multi-word phrase match (+8)
        if (score < 10) {
            for (const phrase of intentItem.phrases) {
                if (phrase.includes(" ") && normalized.includes(phrase)) {
                    score += 8;
                    break;
                }
            }
        }

        // 3. Exact keyword/token match (+4)
        let matchedKeywords = 0;
        for (const keyword of intentItem.keywords) {
            const regex = new RegExp(`\\b${keyword}\\b`, 'i');
            if (regex.test(normalized)) {
                score += 4;
                matchedKeywords++;
            }
        }

        // 4. Partial / fuzzy match (+1)
        for (const keyword of intentItem.keywords) {
            if (normalized.includes(keyword) && matchedKeywords === 0) {
                score += 1;
            }
        }

        return score;
    };

    // Context-Aware Follow-Up Handler
    const followUpKeywords = [
        "this service",
        "this solution",
        "how can i get this",
        "how does it work",
        "tell me more",
        "contact for this",
        "how much does it cost",
        "how much"
    ];

    const checkFollowUp = (normalizedText, currentLastIntent) => {
        if (!currentLastIntent) return null;

        const isFollowUp = followUpKeywords.some(kw => normalizedText.includes(kw));
        if (!isFollowUp) return null;

        const intentLabels = {
            vapt: "VAPT services",
            cybersecurity: "cybersecurity engineering",
            soc: "24/7 Managed SOC",
            cloud_security: "Cloud Security Solutions",
            network_security: "Network Security",
            iam: "Identity & Access Management",
            ai_security: "AI & LLM Security",
            digital_transformation: "digital transformation",
            enterprise_software: "enterprise software"
        };

        const label = intentLabels[currentLastIntent] || "services";

        if (normalizedText.includes("cost") || normalizedText.includes("price") || normalizedText.includes("much")) {
            return {
                intent: "pricing",
                text: `Pricing for our ${label} depends on the scope, environment, and specific requirements of the engagement.\n\nOur team can review your requirements and provide the appropriate commercial proposal.\n\nWould you like to contact our team?`,
                actions: [
                    { label: "Contact Us", type: "route", value: "/contact" }
                ]
            };
        }

        return {
            intent: currentLastIntent,
            text: `You can discuss your ${label} requirement with our team. I can take you to the Contact Us page to share your scope and requirements.`,
            actions: [
                { label: "Contact Us", type: "route", value: "/contact" }
            ]
        };
    };

    const handleSend = (textToSend) => {
        const text = textToSend || inputValue;
        if (!text.trim()) return;

        // User message
        const userMsg = {
            id: Date.now(),
            sender: "user",
            text: text.trim()
        };

        setMessages(prev => [...prev, userMsg]);
        if (!textToSend) setInputValue("");

        // Simulate typing delay for professional chatbot feel
        setTimeout(() => {
            const response = getBotResponse(text);
            const botMsg = {
                id: Date.now() + 1,
                sender: "bot",
                text: response.text,
                actions: response.actions || []
            };
            setMessages(prev => [...prev, botMsg]);
        }, 400);
    };

    const getBotResponse = (userText) => {
        const processed = preprocessText(userText);
        const normalized = processed.normalized;

        // First check if this is a context follow-up
        const followUpResponse = checkFollowUp(normalized, lastIntent);
        if (followUpResponse) {
            setLastIntent(followUpResponse.intent);
            return {
                text: followUpResponse.text,
                actions: followUpResponse.actions || []
            };
        }

        // Ranked Intents matching
        const MIN_CONFIDENCE = 3;

        const rankedIntents = chatbotKnowledge
            .map((intentItem) => ({
                ...intentItem,
                score: calculateIntentScore(processed, intentItem)
            }))
            .sort((a, b) => {
                if (b.score !== a.score) {
                    return b.score - a.score;
                }
                return (b.priority || 0) - (a.priority || 0);
            });

        // Developer logging
        if (import.meta.env.DEV) {
            console.debug("Chatbot Scoring Debug:", {
                userMessage: userText,
                normalizedMessage: normalized,
                ranked: rankedIntents.slice(0, 3)
            });
        }

        const bestMatch = rankedIntents[0];

        if (!bestMatch || bestMatch.score < MIN_CONFIDENCE) {
            return {
                text: "I don't have enough information to answer that accurately.\n\nI can help with Netcradus services such as cybersecurity, VAPT, cloud security, SOC, AI solutions and enterprise technology services.\n\nYou can also contact our team for a specific requirement.",
                actions: [
                    { label: "Our Services", type: "action", value: "services" },
                    { label: "Talk to an Expert", type: "route", value: "/contact" },
                    { label: "Contact Us", type: "route", value: "/contact" }
                ]
            };
        }

        // Customize pricing context based on request details
        let responseText = bestMatch.response;
        if (bestMatch.intent === "pricing") {
            if (normalized.includes("vapt") || normalized.includes("penetration")) {
                responseText = "VAPT pricing depends on the scope, environment, and specific requirements of the engagement.\n\nOur team can review your VAPT scope and provide the appropriate commercial proposal.\n\nWould you like to contact our team?";
            } else if (normalized.includes("soc") || normalized.includes("monitoring")) {
                responseText = "Managed SOC pricing depends on the size of your environment (endpoints, servers, log volume) and support SLAs.\n\nOur team can analyze your environment and provide a tailored commercial proposal.\n\nWould you like to contact our team?";
            }
        }

        // Update last recognized intent for follow-ups
        const nonPersistIntents = ["greeting", "thank_you", "goodbye"];
        if (!nonPersistIntents.includes(bestMatch.intent)) {
            setLastIntent(bestMatch.intent);
        }

        return {
            text: responseText,
            actions: bestMatch.actions || []
        };
    };

    const handleActionClick = (action) => {
        if (action.type === "route") {
            setIsChatOpen(false);
            navigate(action.value);
        } else if (action.type === "link") {
            window.open(action.value, '_blank', 'noopener,noreferrer');
        } else if (action.type === "action") {
            if (action.value === "services") {
                handleSend("Our Services");
            } else if (action.value === "uk_office") {
                handleSend("UK Office");
            } else if (action.value === "india_office") {
                handleSend("India Office");
            }
        }
    };

    const quickReplies = [
        "Our Services",
        "Cybersecurity",
        "Cloud Services",
        "AI Solutions",
        "Digital Transformation",
        "Talk to an Expert",
        "Contact Netcradus"
    ];

    return (
        <>
            <style>{`
                @keyframes cbEntrance {
                    0% {
                        opacity: 0;
                        transform: translateY(18px) scale(0.92);
                    }
                    100% {
                        opacity: 1;
                        transform: translateY(0) scale(1);
                    }
                }

                @keyframes cbDotPulse {
                    0%, 100% {
                        opacity: 1;
                        transform: scale(1);
                    }
                    50% {
                        opacity: 0.35;
                        transform: scale(0.8);
                    }
                }

                .nc-chatbot-launcher-group {
                    position: fixed;
                    bottom: 20px;
                    right: 20px;
                    z-index: 9999;
                    display: flex;
                    align-items: center;
                    gap: 12px;
                    cursor: pointer;
                    user-select: none;
                    animation: cbEntrance 0.5s cubic-bezier(0.16, 1, 0.3, 1) forwards;
                    transition: transform 0.25s ease;
                }

                @media (min-width: 768px) {
                    .nc-chatbot-launcher-group {
                        bottom: 28px;
                        right: 28px;
                        gap: 14px;
                    }
                }

                .nc-chatbot-launcher-group:hover {
                    transform: translateY(-2px);
                }

                /* Prompt Pill: "How can I help you?" */
                .nc-chatbot-prompt-pill {
                    display: none;
                    align-items: center;
                    gap: 8px;
                    padding: 9px 18px;
                    background: rgba(10, 16, 28, 0.94);
                    backdrop-filter: blur(14px);
                    -webkit-backdrop-filter: blur(14px);
                    border: 1px solid rgba(255, 121, 0, 0.35);
                    border-radius: 9999px;
                    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.55), 0 0 15px rgba(255, 121, 0, 0.12);
                    color: #FFFFFF;
                    transition: all 0.25s ease;
                }

                @media (min-width: 440px) {
                    .nc-chatbot-prompt-pill {
                        display: flex;
                    }
                }

                .nc-chatbot-launcher-group:hover .nc-chatbot-prompt-pill {
                    border-color: #FF7900;
                    box-shadow: 0 10px 28px rgba(0, 0, 0, 0.65), 0 0 20px rgba(255, 121, 0, 0.28);
                    background: rgba(15, 23, 42, 0.98);
                }

                .nc-chatbot-prompt-dot {
                    width: 8px;
                    height: 8px;
                    border-radius: 50%;
                    background-color: #FF7900;
                    box-shadow: 0 0 8px rgba(255, 121, 0, 0.85);
                    animation: cbDotPulse 2s infinite ease-in-out;
                }

                .nc-chatbot-prompt-text {
                    font-size: 13.5px;
                    font-weight: 600;
                    letter-spacing: 0.2px;
                    white-space: nowrap;
                    color: #FFFFFF;
                }

                /* Robot Launcher Button */
                .nc-chatbot-robot-btn {
                    position: relative;
                    width: 58px;
                    height: 58px;
                    border-radius: 50%;
                    background: #000000;
                    border: 2px solid rgba(255, 121, 0, 0.65);
                    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.6), 0 0 16px rgba(255, 121, 0, 0.3);
                    overflow: hidden;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    transition: all 0.25s ease;
                }

                @media (min-width: 768px) {
                    .nc-chatbot-robot-btn {
                        width: 64px;
                        height: 64px;
                    }
                }

                .nc-chatbot-launcher-group:hover .nc-chatbot-robot-btn {
                    border-color: #FF7900;
                    transform: scale(1.05);
                    box-shadow: 0 12px 30px rgba(0, 0, 0, 0.7), 0 0 24px rgba(255, 121, 0, 0.5);
                }

                .nc-chatbot-robot-img {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    border-radius: 50%;
                    display: block;
                }

                /* Chatbot Window Styling */
                .nc-chatbot-window {
                    position: fixed;
                    bottom: 88px;
                    right: 16px;
                    width: calc(100vw - 32px);
                    max-width: 380px;
                    height: 500px;
                    max-height: calc(100vh - 120px);
                    background: rgba(10, 16, 28, 0.96);
                    backdrop-filter: blur(16px);
                    -webkit-backdrop-filter: blur(16px);
                    border: 1px solid rgba(255, 121, 0, 0.3);
                    border-radius: 20px;
                    box-shadow: 0 20px 50px rgba(0, 0, 0, 0.75), 0 0 30px rgba(255, 121, 0, 0.15);
                    z-index: 10000;
                    display: flex;
                    flex-direction: column;
                    overflow: hidden;
                    font-family: system-ui, -apple-system, sans-serif;
                    animation: cbSlideUp 0.3s cubic-bezier(0.16, 1, 0.3, 1);
                }

                @media (min-width: 768px) {
                    .nc-chatbot-window {
                        bottom: 104px;
                        right: 28px;
                        height: 530px;
                        max-height: calc(100vh - 140px);
                    }
                }

                @keyframes cbSlideUp {
                    from {
                        opacity: 0;
                        transform: translateY(14px) scale(0.96);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0) scale(1);
                    }
                }

                .nc-chatbot-header {
                    padding: 16px;
                    background: linear-gradient(135deg, #111A2E, #050B14);
                    border-bottom: 1px solid rgba(255, 107, 0, 0.15);
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                }

                .nc-chatbot-avatar-container {
                    position: relative;
                    width: 40px;
                    height: 40px;
                    border-radius: 50%;
                    background: linear-gradient(135deg, #FF6B00, #E8400A);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    border: 1px solid rgba(255, 255, 255, 0.2);
                }

                .nc-chatbot-online-indicator {
                    position: absolute;
                    bottom: 0;
                    right: 0;
                    width: 10px;
                    height: 10px;
                    border-radius: 50%;
                    background-color: #22C55E;
                    border: 2px solid #050B14;
                    box-shadow: 0 0 8px #22C55E;
                }

                .nc-chatbot-title {
                    font-size: 14px;
                    font-weight: 700;
                    color: #FFFFFF;
                    margin: 0;
                    letter-spacing: 0.5px;
                }

                .nc-chatbot-subtitle {
                    font-size: 11px;
                    color: #94A3B8;
                    margin: 2px 0 0 0;
                }

                .nc-chatbot-close-btn {
                    color: #94A3B8;
                    background: transparent;
                    border: none;
                    cursor: pointer;
                    padding: 4px;
                    border-radius: 50%;
                    transition: all 0.2s;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }

                .nc-chatbot-close-btn:hover {
                    color: #FFFFFF;
                    background-color: rgba(255, 255, 255, 0.08);
                }

                .nc-chatbot-messages {
                    flex: 1;
                    overflow-y: auto;
                    padding: 16px;
                    display: flex;
                    flex-direction: column;
                    gap: 12px;
                }

                /* Custom Scrollbar */
                .nc-chatbot-messages::-webkit-scrollbar {
                    width: 6px;
                }
                .nc-chatbot-messages::-webkit-scrollbar-track {
                    background: transparent;
                }
                .nc-chatbot-messages::-webkit-scrollbar-thumb {
                    background: rgba(255, 107, 0, 0.25);
                    border-radius: 3px;
                }
                .nc-chatbot-messages::-webkit-scrollbar-thumb:hover {
                    background: rgba(255, 107, 0, 0.4);
                }

                .nc-chatbot-bubble {
                    max-width: 85%;
                    padding: 10px 14px;
                    border-radius: 16px;
                    font-size: 13px;
                    line-height: 1.45;
                    white-space: pre-wrap;
                }

                .nc-chatbot-bubble.bot {
                    background-color: #1E293B;
                    color: #E2E8F0;
                    border-bottom-left-radius: 4px;
                    border: 1px solid rgba(255, 255, 255, 0.05);
                }

                .nc-chatbot-bubble.user {
                    background: linear-gradient(135deg, #FF6B00, #E8400A);
                    color: #FFFFFF;
                    border-bottom-right-radius: 4px;
                    box-shadow: 0 4px 12px rgba(232, 64, 10, 0.2);
                }

                .nc-chatbot-quick-reply-btn {
                    background-color: rgba(255, 107, 0, 0.08);
                    border: 1px solid rgba(255, 107, 0, 0.2);
                    color: #FFF;
                    padding: 6px 12px;
                    border-radius: 20px;
                    font-size: 11.5px;
                    font-weight: 500;
                    cursor: pointer;
                    transition: all 0.2s;
                    text-align: left;
                }

                .nc-chatbot-quick-reply-btn:hover {
                    background-color: #E8400A;
                    border-color: #E8400A;
                    color: #FFF;
                    transform: translateY(-1px);
                    box-shadow: 0 4px 10px rgba(232, 64, 10, 0.3);
                }

                .nc-chatbot-action-btn {
                    background-color: rgba(59, 130, 246, 0.08);
                    border: 1px solid rgba(59, 130, 246, 0.25);
                    color: #3B82F6;
                    padding: 5px 10px;
                    border-radius: 12px;
                    font-size: 11.5px;
                    font-weight: 600;
                    cursor: pointer;
                    display: inline-flex;
                    align-items: center;
                    transition: all 0.2s;
                }

                .nc-chatbot-action-btn:hover {
                    background-color: #3B82F6;
                    color: #FFF;
                    transform: translateY(-1px);
                }

                .nc-chatbot-input-footer {
                    padding: 12px 16px;
                    background-color: #050B14;
                    border-top: 1px solid rgba(255, 107, 0, 0.15);
                    display: flex;
                    align-items: center;
                    gap: 8px;
                }

                .nc-chatbot-input {
                    flex: 1;
                    background-color: #1E293B;
                    border: 1px solid rgba(255, 107, 0, 0.15);
                    border-radius: 20px;
                    padding: 8px 16px;
                    font-size: 13px;
                    color: #FFFFFF;
                    outline: none;
                    transition: all 0.2s;
                }

                .nc-chatbot-input:focus {
                    border-color: #E8400A;
                    box-shadow: 0 0 0 2px rgba(232, 64, 10, 0.15);
                }

                .nc-chatbot-send-btn {
                    width: 34px;
                    height: 34px;
                    border-radius: 50%;
                    background: linear-gradient(135deg, #FF6B00, #E8400A);
                    border: none;
                    color: #FFFFFF;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    cursor: pointer;
                    transition: all 0.2s;
                }

                .nc-chatbot-send-btn:hover:not(:disabled) {
                    transform: scale(1.05);
                    box-shadow: 0 4px 10px rgba(232, 64, 10, 0.3);
                }

                .nc-chatbot-send-btn:disabled {
                    background: #334155;
                    color: #64748B;
                    cursor: not-allowed;
                }
            `}</style>

            {/* Floating Chatbot Launcher Group (Robot + "How can I help you?") */}
            <div
                onClick={() => setIsChatOpen(prev => !prev)}
                className="nc-chatbot-launcher-group group"
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault();
                        setIsChatOpen(prev => !prev);
                    }
                }}
                aria-label={isChatOpen ? "Close Netcradus chatbot" : "Open Netcradus chatbot: How can I help you?"}
            >
                {/* "How can I help you?" Text Pill */}
                <div className="nc-chatbot-prompt-pill">
                    <span className="nc-chatbot-prompt-dot" />
                    <span className="nc-chatbot-prompt-text">How can I help you?</span>
                </div>

                {/* Robot Launcher Circle */}
                <div className="nc-chatbot-robot-btn" title="How can I help you?">
                    <img
                        src="/assets/chatbot-robot.png"
                        alt="Netcradus AI Assistant"
                        className="nc-chatbot-robot-img"
                    />
                </div>
            </div>

            {/* Chatbot Window */}
            {isChatOpen && (
                <div className="nc-chatbot-window">
                    <div className="nc-chatbot-header">
                        <div className="flex items-center gap-3">
                            <div className="nc-chatbot-avatar-container overflow-hidden">
                                <img
                                    src="/assets/chatbot-robot.png"
                                    alt="Netcradus Assistant"
                                    className="w-full h-full object-cover rounded-full"
                                />
                                <span className="nc-chatbot-online-indicator" />
                            </div>
                            <div>
                                <h4 className="nc-chatbot-title">Netcradus Assistant</h4>
                                <p className="nc-chatbot-subtitle">How can we help you today?</p>
                            </div>
                        </div>
                        <button 
                            onClick={(e) => {
                                e.stopPropagation();
                                setIsChatOpen(false);
                            }}
                            className="nc-chatbot-close-btn"
                            aria-label="Close chatbot"
                        >
                            <X size={18} />
                        </button>
                    </div>

                    {/* Messages Body */}
                    <div ref={messagesContainerRef} className="nc-chatbot-messages">
                        {messages.map((msg) => (
                            <div 
                                key={msg.id} 
                                className={`flex flex-col ${msg.sender === 'user' ? 'items-end' : 'items-start'} gap-1`}
                            >
                                <div className={`nc-chatbot-bubble ${msg.sender === 'user' ? 'user' : 'bot'}`}>
                                    {msg.text}
                                </div>
                                {msg.actions && msg.actions.length > 0 && (
                                    <div className="flex flex-wrap gap-2 mt-1">
                                        {msg.actions.map((act, index) => (
                                            <button
                                                key={index}
                                                onClick={() => handleActionClick(act)}
                                                className="nc-chatbot-action-btn"
                                            >
                                                {act.label}
                                                <ArrowRight size={12} className="ml-1" />
                                            </button>
                                        ))}
                                    </div>
                                )}
                            </div>
                        ))}

                        {/* Quick suggestions displayed right after the first message */}
                        {messages.length === 1 && (
                            <div className="flex flex-col gap-1.5 mt-2">
                                <p className="text-[10px] text-gray-400 font-semibold uppercase tracking-wider mb-1">Suggested Topics</p>
                                <div className="flex flex-col gap-1.5">
                                    {quickReplies.map((reply, i) => (
                                        <button
                                            key={i}
                                            onClick={() => handleSend(reply)}
                                            className="nc-chatbot-quick-reply-btn"
                                        >
                                            {reply}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Input Footer */}
                    <form 
                        onSubmit={(e) => { e.preventDefault(); handleSend(); }}
                        className="nc-chatbot-input-footer"
                    >
                        <input
                            type="text"
                            value={inputValue}
                            onChange={(e) => setInputValue(e.target.value)}
                            placeholder="Ask us anything..."
                            className="nc-chatbot-input"
                            aria-label="Chat input message"
                        />
                        <button
                            type="submit"
                            disabled={!inputValue.trim()}
                            className="nc-chatbot-send-btn"
                            aria-label="Send message"
                        >
                            <Send size={16} />
                        </button>
                    </form>
                </div>
            )}
        </>
    );
};

export default NetcradusChatbot;
