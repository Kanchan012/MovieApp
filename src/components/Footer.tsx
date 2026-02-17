import { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Footer.css";
import Logo from "./common/Logo";
import { FaFacebook, FaInstagram, FaLinkedin, FaPaperPlane } from "react-icons/fa";
import { toast } from "react-toastify";

const Footer: React.FC = () => {
  const [email, setEmail] = useState("");

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      if (!email.toLowerCase().endsWith("@gmail.com")) {
        toast.error("Please enter a valid Gmail address (@gmail.com)");
        return;
      }
      toast.success(`Subscription successful! We'll alert ${email} for new movies.`);
      setEmail("");
    }
  };

  return (
    <footer className="footer">
      <div className="newsletter-section">
        <div className="newsletter-content">
          <div className="newsletter-text">
            <h3>Join the Movie World</h3>
            <p>Get exclusive updates on the latest releases and trending hits</p>
          </div>
          <form className="newsletter-form" onSubmit={handleSubscribe}>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <button type="submit" className="subscribe-btn">
              <FaPaperPlane /> Subscribe
            </button>
          </form>
        </div>
      </div>

      <div className="footer-content">
        <div className="footer-brand">
          <Logo className="footer-logo" />
          <p className="footer-tagline">
            Your ultimate destination for movies, TV shows, and entertainment.
          </p>
        </div>

        <div className="footer-links">
          <div className="footer-column">
            <h3>Company</h3>
            <ul>
              <li>
                <NavLink to="/tech-stack">Tech Stack</NavLink>
              </li>
              <li>
                <NavLink to="/faq">FAQ</NavLink>
              </li>
              <li>
                <NavLink to="/contact">Contact Us</NavLink>
              </li>
            </ul>
          </div>

          <div className="footer-column">
            <h3>Watch</h3>
            <ul>
              <li>
                <NavLink to="/trending">Trending Movies</NavLink>
              </li>
              <li>
                <NavLink to="/tv-shows">TV Shows</NavLink>
              </li>
              <li>
                <NavLink to="/latest">Latest Movies</NavLink>
              </li>
              <li>
                <NavLink to="/upcoming">Upcoming Movies</NavLink>
              </li>
            </ul>
          </div>

          <div className="footer-column">
            <h3>Support</h3>
            <ul>
              <li>
                <NavLink to="/community-guidelines">Community Guidelines</NavLink>
              </li>
              <li>
                <NavLink to="/terms-of-service">Terms of Service</NavLink>
              </li>
              <li>
                <NavLink to="/privacy-policy">Privacy Policy</NavLink>
              </li>
            </ul>
          </div>

          <div className="footer-column">
            <h3>Connect</h3>
            <div className="social-icons">
              <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                <FaFacebook className="social-icon-icon" />
              </a>
              <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                <FaInstagram className="social-icon-icon" />
              </a>
              <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                <FaLinkedin className="social-icon-icon" />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom-links">
        <span>
          &copy; {new Date().getFullYear()} MovieApp. All rights reserved.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
