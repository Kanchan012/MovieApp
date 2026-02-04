import React from "react";
import "./Footer.css";
import { RiMovie2AiFill } from "react-icons/ri";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-brand">
          <div className="footer-logo">
            <RiMovie2AiFill className="logo-icon" />
            <span className="logo-text">MovieApp</span>
          </div>
          <p className="footer-tagline">
            Your ultimate destination for movies, TV shows, and entertainment. <br />
            Enjoy Watching Movies
          </p>
        </div>

        <div className="footer-links">
          <div className="footer-column">
            <h3>Company</h3>
            <ul>
              <li>
                <a href="#">About Us</a>
              </li>
              <li>
                <a href="#">Careers</a>
              </li>
              <li>
                <a href="#">Our Culture</a>
              </li>
            </ul>
          </div>

          <div className="footer-column">
            <h3>Watch</h3>
            <ul>
              <li>
                <a href="/trending">Trending Movies</a>
              </li>
              <li>
                <a href="#">TV Shows</a>
              </li>
              <li>
                <a href="/latest">Latest Movies</a>
              </li>
              <li>
                <a href="/upcoming">Upcoming Movies</a>
              </li>
            </ul>
          </div>

          <div className="footer-column">
            <h3>Support</h3>
            <ul>
              <li>
                <a href="#">Community Guidelines</a>
              </li>
              <li>
                <a href="#">Terms of Service</a>
              </li>
              <li>
                <a href="#">Privacy Policy</a>
              </li>
            </ul>
          </div>

          <div className="footer-column">
            <h3>Connect</h3>
            <div className="social-icons">
              <a href="https://www.facebook.com">
                <FaFacebook className="text-blue-600 bg-white border-2 border-gray-300 rounded-full w-5 h-5" />
              </a>
              <a href="https://www.instagram.com">
                <FaInstagram className="text-blue-600 bg-white border-2 border-gray-300 rounded-full w-5 h-5" />
              </a>
              <a href="https://www.linkedin.com">
                <FaLinkedin className="text-blue-600 bg-white border-2 border-gray-300 rounded-full w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom-links">
        <span>
          &copy; 2026 MovieApp. All rights reserved.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
