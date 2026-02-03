import { useEffect, useState } from "react";
import { fetchTrending } from "../services/tmdbApi"
import type { TrendingItem } from "../services/tmdbApi";
import "./Trending.css"

const Trending: React.FC = () => {
  const [movies, setMovies] = useState<TrendingItem[]>([]);

  useEffect(() => {
    fetchTrending()
      .then((data) => {
        setMovies(data.results);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div className="trending-container" >
      <div className="trending-grid" >
        {movies.map((item) => (
          <div className="trending-card" key={item.id} >
            <img
              src={
                item.poster_path
                  ? `https://image.tmdb.org/t/p/w300${item.poster_path}`
                  : "https://via.placeholder.com/300x450?text=No+Image"
              }
              alt={item.title || item.name || "Movie poster"}
            />
            <h4>{item.title || item.name}</h4>
            <h4>{item.release_date }</h4>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Trending;
