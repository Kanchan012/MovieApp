import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";
import Trending from "./pages/Trending";
import Latest from "./pages/Latest";
import Watchlist from "./pages/Watchlist";
import Footer from "./components/Footer";
import UpcomingMovies from "./pages/UpcomingMovies";
import MovieDetails from "./pages/MovieDetails";
import Profile from "./pages/Profile";
import SearchResults from "./pages/SearchResults";
import TechStack from "./pages/TechStack";
import FAQ from "./pages/FAQ";
import ContactUs from "./pages/ContactUs";
import TVShows from "./pages/TVShows";
import CommunityGuidelines from "./pages/CommunityGuidelines";
import { WatchlistProvider } from "./context/WatchlistContext";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <WatchlistProvider>
      <Header />
       <ToastContainer position="top-right" autoClose={1000} theme="dark" />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/home" element={<Home />} />
        <Route path="/trending" element={<Trending />} />
        <Route path="/latest" element={<Latest />} />
        <Route path="/watchlist" element={<Watchlist />} />
        <Route path="/upcoming" element={<UpcomingMovies />} />
        <Route path="/movie/:id" element={<MovieDetails />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/search" element={<SearchResults />} />
        <Route path="/tech-stack" element={<TechStack />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/tv-shows" element={<TVShows />} />
        <Route path="/community-guidelines" element={<CommunityGuidelines />} />
      </Routes>
      <Footer />
    </WatchlistProvider>
  );
}

export default App;
