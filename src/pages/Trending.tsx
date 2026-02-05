import { useEffect, useState } from "react";
import { fetchTrending } from "../services/tmdbApi";
import type { TrendingItem } from "../services/tmdbApi";
import MovieGrid from "../components/common/MovieGrid";
import "./Trending.css";

const Trending: React.FC = () => {
  const [movies, setMovies] = useState<TrendingItem[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchTrending()
      .then((data) => {
        setMovies(data.results);
      })
      .catch((error) => {
        console.error(error);
        setError("Failed to fetch trending movies.");
      });
  }, []);

  if (error) return <div className="error-message">{error}</div>;

  return (
    <div className="trending-container">
      <MovieGrid
        movies={movies}
        gridClassName="trending-grid"
        cardClassName="trending-card"
      />
    </div>
  );
};

export default Trending;
