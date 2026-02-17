import React from "react";
import "./Support.css";
import { FaLock, FaHdd, FaShareAlt, FaUserSecret } from "react-icons/fa";

const PrivacyPolicy: React.FC = () => {
    return (
        <div className="support-page">
            <div className="support-container">
                <header className="support-header">
                    <h1 className="support-title">Privacy Policy</h1>
                    <p className="support-subtitle">Your privacy is important to us. Here's how we protect your data.</p>
                </header>

                <div className="support-content">
                    <section className="support-section">
                        <h2><FaLock /> Minimal Data Collection</h2>
                        <p>
                            We value your anonymity. We only collect your email address if you explicitly sign up
                            for our newsletter or create an account to sync your watchlist.
                        </p>
                    </section>

                    <section className="support-section">
                        <h2><FaHdd /> Data Storage</h2>
                        <p>
                            By default, your watchlist and preferences are stored locally on your device.
                            If you are logged in, we securely sync this information to our database to provide
                            a consistent experience across your devices.
                        </p>
                    </section>

                    <section className="support-section">
                        <h2><FaShareAlt /> Third-Party Services</h2>
                        <p>
                            We interact with The Movie Database (TMDB) API to fetch information. While we don't
                            share your personal information with them, your search queries and movie interactions
                            are processed by their infrastructure to provide relevant data.
                        </p>
                    </section>

                    <section className="support-section">
                        <h2><FaUserSecret /> No Data Selling</h2>
                        <p>
                            We never sell, rent, or trade your personal information with third parties for marketing purposes.
                            Your data is solely used to enhance your experience on MovieApp.
                        </p>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default PrivacyPolicy;
