import { useEffect } from "react";
import { useMovies } from "../redux/useMovies";
import MovieGrid from "../components/common/MovieGrid";
import "./Trending.css";

const Trending: React.FC = () => {
  const { trending, loading, error, getTrending } = useMovies();

  useEffect(() => {
    getTrending();
  }, []);

  if (loading) return <div className="loading-state"><div className="loader"></div></div>;
  if (error) return <div className="error-message">{error}</div>;

  return (
    <div className="trending-container">
      <MovieGrid
        movies={trending}
        gridClassName="trending-grid"
        cardClassName="trending-card"
      />
    </div>
  );
};

export default Trending;
