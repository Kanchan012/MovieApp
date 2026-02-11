import { useAppDispatch, useAppSelector } from './hooks';
import { addToWatchlist, removeFromWatchlist } from './slices/watchlistSlice';
import type { MovieDetail } from '../services/tmdbApi';

export const useWatchlistActions = () => {
    const dispatch = useAppDispatch();
    const watchlist = useAppSelector((state) => state.watchlist.items);

    const toggleWatchlist = (movie: MovieDetail) => {
        if (watchlist.some((m) => m.id === movie.id)) {
            dispatch(removeFromWatchlist(movie.id));
        } else {
            dispatch(addToWatchlist(movie));
        }
    };

    const isInWatchlist = (movieId: number) => {
        return watchlist.some((movie) => movie.id === movieId);
    };

    return {
        watchlist,
        toggleWatchlist,
        isInWatchlist,
        addToWatchlist: (movie: MovieDetail) => dispatch(addToWatchlist(movie)),
        removeFromWatchlist: (movieId: number) => dispatch(removeFromWatchlist(movieId)),
    };
};
