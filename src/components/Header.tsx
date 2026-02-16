import { FaSearch } from "react-icons/fa";
import { IoBookmarksSharp } from "react-icons/io5";
import Logo from "./common/Logo";
import { NavLink, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { useAppSelector, useAppDispatch  } from "../redux/hooks";
import { setSearchQuery } from "../redux/slices/searchSlice";
import "./Header.css";

const Header: React.FC = () => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const [searchQuery, setSearchQueryLocal] = useState("");
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const watchlist = useAppSelector((state) => state.watchlist.items);

  useEffect(() => {
    const checkAuth = () => {
      setIsLoggedIn(localStorage.getItem('isLoggedIn') === 'true');
    };

    checkAuth();
    window.addEventListener('authChange', checkAuth);
    return () => window.removeEventListener('authChange', checkAuth);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn');
    setIsLoggedIn(false);
    navigate('/login');
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      dispatch(setSearchQuery(searchQuery));
      navigate(`/search?q=${encodeURIComponent(searchQuery)}`);
    }
  };
  return (
    <header className="header">
      <div className="header-container">
        <NavLink to="/home" className="logo-link">
          <Logo />
        </NavLink>

        <form className="search-box" onSubmit={handleSearch}>
          <button type="submit" className="search-btn">
            <FaSearch className="search-icon" />
          </button>
          <input
            type="text"
            placeholder="Search for movies"
            className="search-input"
            value={searchQuery}
            onChange={(e) => setSearchQueryLocal(e.target.value)}
          />
        </form>


        <nav className="nav-links">
          <NavLink to="/trending" className="nav-item">
            Trending Movies
          </NavLink>
          <NavLink to="/latest" className="nav-item">
            Latest Movies
          </NavLink>
        </nav>

        <NavLink to="/watchlist" className="watchlist">
          <div className="watchlist-icon-container">
            <IoBookmarksSharp className="watchlist-icon" />
            {watchlist.length > 0 && (
              <span className="watchlist-count">{watchlist.length}</span>
            )}
          </div>
          <span className="watchlist-text">Watchlist</span>
        </NavLink>

        <div className="btn-group">
          {isLoggedIn ? (
            <>
              <NavLink to="/profile" className="profile-link">
                <img
                  src={JSON.parse(localStorage.getItem('userData') || '{}').avatar || ''}
                  alt="Profile"
                  className="header-profile-avatar"
                />
                <span>Profile</span>
              </NavLink>
              <button className="logout-header-btn" onClick={handleLogout}>Logout</button>
            </>
          ) : (
            <>
              <NavLink to="/login">
                <button className="login-btn">Login</button>
              </NavLink>
              <NavLink to="/register">
                <button className="register-btn">Register</button>
              </NavLink>
            </>
          )}
        </div>

      </div>
    </header>
  );
};

export default Header;
