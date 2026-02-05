import { useEffect, useState } from "react";
import { fetchLatestMovies, type TrendingItem } from "../services/tmdbApi";
import MovieGrid from "../components/common/MovieGrid";
import "./Latest.css";

function Latest() {
  const [movies, setMovies] = useState<TrendingItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const getLatestMovies = async () => {
      try {
        setLoading(true);
        const data = await fetchLatestMovies();
        setMovies(data.results);
        setError(null);
      } catch (err) {
        setError("Failed to load the latest movies. Please try again later.");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    getLatestMovies();
  }, []);

  if (loading) {
    return (
      <div className="loading-container">
        <div className="loader">loading...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="error-container">
        <h2>Oops!</h2>
        <p>{error}</p>
        <button onClick={() => window.location.reload()} className="btn-primary">
          Try Again
        </button>
      </div>
    );
  }

  return (
    <div className="latest-container">
      <header className="latest-header">
        <h1>Latest Releases</h1>
        <p>Stay updated with the newest movies in theaters</p>
      </header>

      <MovieGrid
        movies={movies}
        gridClassName="movies-grid"
        cardClassName="movie-card"
        imageClassName="movie-poster"
        infoClassName="movie-info"
      />
    </div>
  );
}

export default Latest;
