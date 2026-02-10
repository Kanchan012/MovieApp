import { createContext } from 'react';
import type { MovieDetail } from '../services/tmdbApi';

export interface WatchlistContextType {
  watchlist: MovieDetail[];
  addToWatchlist: (movie: MovieDetail) => void;
  removeFromWatchlist: (movieId: number) => void;
  isInWatchlist: (movieId: number) => boolean;
}

export const WatchlistContext =
  createContext<WatchlistContextType | undefined>(undefined);
