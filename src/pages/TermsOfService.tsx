import React from "react";
import "./Support.css";
import { FaGavel, FaDatabase, FaShieldAlt, FaExclamationCircle } from "react-icons/fa";

const TermsOfService: React.FC = () => {
    return (
        <div className="support-page">
            <div className="support-container">
                <header className="support-header">
                    <h1 className="support-title">Terms of Service</h1>
                    <p className="support-subtitle">Please read these terms carefully before using MovieApp.</p>
                </header>

                <div className="support-content">
                    <section className="support-section">
                        <h2><FaGavel /> Acceptance of Terms</h2>
                        <p>
                            By accessing or using MovieApp, you agree to be bound by these Terms of Service.
                            If you do not agree with any part of these terms, you may not use our platform.
                        </p>
                    </section>

                    <section className="support-section">
                        <h2><FaDatabase /> Use of TMDB Data</h2>
                        <p>
                            All movie data, including titles, descriptions, and posters, is provided by
                            The Movie Database (TMDB). This data is subject to change without notice.
                            MovieApp is not responsible for any inaccuracies in the data provided by external sources.
                        </p>
                    </section>

                    <section className="support-section">
                        <h2><FaShieldAlt /> Intellectual Property</h2>
                        <p>
                            Modern UI designs, custom components, and source code are the property of MovieApp.
                            Unauthorized reproduction or distribution of this platform's assets is strictly prohibited.
                        </p>
                    </section>

                    <section className="support-section">
                        <h2><FaExclamationCircle /> Limitation of Liability</h2>
                        <p>
                            MovieApp is provided "as is" for entertainment and informational purposes.
                            We do not guarantee the availability or accuracy of information and shall not be
                            liable for any damages resulting from your use of the platform.
                        </p>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default TermsOfService;
