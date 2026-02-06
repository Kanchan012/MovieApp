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

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/home" element={<Home />} />
        <Route path="/trending" element={<Trending />} />
        <Route path="/latest" element={<Latest />} />
        <Route path="/watchlist" element={<Watchlist />} />
        <Route path="/upcoming" element={<UpcomingMovies/>}/>
        <Route path="/movie/:id" element={<MovieDetails />} />

      </Routes>
      <Footer/>
    </>
  );
}

export default App;
