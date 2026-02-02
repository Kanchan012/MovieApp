import { FaSearch } from "react-icons/fa";
import { IoBookmarksSharp } from "react-icons/io5";
import { RiMovie2AiFill } from "react-icons/ri";
import "./Header.css";

const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="header-container">
        <div className="logo-section">
          <RiMovie2AiFill className="logo-icon" />
          <h1 className="logo-text">MovieApp</h1>
        </div>

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

        <div className="nav-item">Trending Movies</div>
        <div className="nav-item">Latest Movies</div>

        <div className="watchlist">
          <IoBookmarksSharp className="watchlist-icon" />
          <h1 className="watchlist-text">Watchlist</h1>
        </div>
      </div>
    </header>
  );
};

export default Header;
