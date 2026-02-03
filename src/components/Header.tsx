import { FaSearch } from "react-icons/fa";
import { IoBookmarksSharp } from "react-icons/io5";
import { RiMovie2AiFill } from "react-icons/ri";
import { NavLink } from "react-router-dom";
import "./Header.css";

const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="header-container">
        <NavLink to="/home" className="logo-link">
          <div className="logo-section">
            <RiMovie2AiFill className="logo-icon" />
            <h1 className="logo-text">MovieApp</h1>
          </div>
        </NavLink>

        <div className="search-box">
          <button className="search-btn">
            <FaSearch className="search-icon" />
          </button>
          <input
            type="text"
            placeholder="Search for anything"
            className="search-input"
          />
        </div>

        <nav className="nav-links">
          <NavLink to="/trending" className="nav-item">
            Trending Movies
          </NavLink>
          <NavLink to="/latest" className="nav-item">
            Latest Movies
          </NavLink>
        </nav>

        <NavLink to="/watchlist" className="watchlist">
          <IoBookmarksSharp className="watchlist-icon" />
          <span className="watchlist-text">Watchlist</span>
        </NavLink>

        <div className="btn-group">
          <NavLink to="/login">
            <button className="login-btn">Login</button>
          </NavLink>
          <NavLink to="/register">
            <button className="register-btn">Register</button>
          </NavLink>
        </div>

      </div>
    </header>
  );
};

export default Header;
