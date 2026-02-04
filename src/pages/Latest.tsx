import { useEffect, useState } from "react";
import { fetchLatestMovies, type TrendingItem } from "../services/tmdbApi";
import "./Latest.css"

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

      <div className="movies-grid">
        {movies.map((movie) => (
          <div key={movie.id} className="movie-card">
            <div className="poster-wrapper">
              {movie.poster_path ? (
                <img
                  src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                  alt={movie.title || movie.name}
                  className="movie-poster"
                />
              ) : (
                <div className="no-poster">
                  <i className="fas fa-film"></i>
                </div>
              )}
            </div>

            <div className="movie-info">
              <h3 className="movie-title">{movie.title || movie.name}</h3>
              <div className="movie-date">
                <i className="far fa-calendar"></i>
                <span>Release: Recently Added</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Latest;
