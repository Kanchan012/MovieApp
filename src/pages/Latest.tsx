import { useEffect } from "react";
import { useMovies } from "../redux/useMovies";
import MovieGrid from "../components/common/MovieGrid";
import "./Latest.css";

function Latest() {
  const { latest, loading, error, getLatest } = useMovies();

  useEffect(() => {
    getLatest();
  }, []);

  if (loading) {
    return (
      <div className="loading-container">
        <div className="loader"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="error-container">
        <h2>Oops!</h2>
        <p>{error}</p>
        <button onClick={() => getLatest()} className="btn-primary">
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
        movies={latest}
        gridClassName="movies-grid"
        cardClassName="movie-card"
        imageClassName="movie-poster"
        infoClassName="movie-info"
      />
    </div>
  );
}

export default Latest;
