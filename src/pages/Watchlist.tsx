import { useWatchlist } from "../context/WatchlistContext";
import MovieGrid from "../components/common/MovieGrid";
import type { TrendingItem } from "../services/tmdbApi";
import "./Watchlist.css";

const Watchlist = () => {
  const { watchlist } = useWatchlist();
  const watchlistAsTrendingItems: TrendingItem[] = watchlist.map((movie) => ({
    id: movie.id,
    title: movie.title,
    poster_path: movie.poster_path,
  }));

  return (
    <div className="watchlist-page">
      <div className="watchlist-container">
        <header className="watchlist-header">
          <h1 className="watchlist-title">My Watchlist</h1>
          <p className="watchlist-subtitle">
            {watchlist.length === 0
              ? "Your watchlist is empty. Add movies to keep track of what you want to watch!"
              : `You have ${watchlist.length} movie${watchlist.length === 1 ? "" : "s"} saved.`}
          </p>
        </header>

        {watchlist.length > 0 ? (
          <MovieGrid
            movies={watchlistAsTrendingItems}
            gridClassName="watchlist-grid"
            cardClassName="watchlist-card"
            imageClassName="watchlist-poster"
            infoClassName="watchlist-info"
          />
        ) : (
          <div className="empty-watchlist">
            <div className="empty-icon">🎬</div>
            <p>Ready to find your next favorite movie?</p>
            <a href="/home" className="browse-btn">Browse Movies</a>
          </div>
        )}
      </div>
    </div>
  );
};

export default Watchlist;
