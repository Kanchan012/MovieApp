import React from "react";
import { FaUsers, FaExclamationTriangle, FaPenFancy, FaBan } from "react-icons/fa";

const CommunityGuidelines: React.FC = () => {
    return (
        <div className="support-page">
            <div className="support-container">
                <header className="support-header">
                    <h1 className="support-title">Community Guidelines</h1>
                    <p className="support-subtitle">Ensuring a positive and safe environment for all movie lovers.</p>
                </header>

                <div className="support-content">
                    <section className="support-section">
                        <h2><FaUsers /> Respect the Community</h2>
                        <p>
                            Treat all members with kindness and respect. We are a diverse group of film enthusiasts,
                            and differences in taste should be celebrated, not criticized.
                        </p>
                    </section>

                    <section className="support-section">
                        <h2><FaExclamationTriangle /> No Spoilers Policy</h2>
                        <p>
                            Don't ruin the magic! Always use spoiler warnings when discussing key plot points,
                            endings, or major twists in your reviews and comments.
                        </p>
                    </section>

                    <section className="support-section">
                        <h2><FaPenFancy /> Quality & Originality</h2>
                        <p>
                            Share your unique perspective. Avoid copy-pasting reviews from other sites or using AI-generated
                            content without significant personal input. Your voice is what matters to us!
                        </p>
                    </section>

                    <section className="support-section">
                        <h2><FaBan /> Prohibited Content</h2>
                        <ul className="support-list">
                            <li>No hate speech, harassment, or bullying of any kind.</li>
                            <li>No spam, commercial promotion, or irrelevant external links.</li>
                            <li>No sexually explicit content or excessive violence in descriptions.</li>
                            <li>No impersonation of other users or staff members.</li>
                        </ul>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default CommunityGuidelines;
