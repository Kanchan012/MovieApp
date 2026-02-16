import { useAppDispatch, useAppSelector } from './hooks';
import { addToWatchlist, removeFromWatchlist } from './slices/watchlistSlice';
import type { MovieDetail } from '../services/tmdbApi';
import { toast } from 'react-toastify';

export const useWatchlistActions = () => {
    const dispatch = useAppDispatch();
    const watchlist = useAppSelector((state) => state.watchlist.items);

    const toggleWatchlist = (movie: MovieDetail) => {
        if (watchlist.some((m) => m.id === movie.id)) {
            dispatch(removeFromWatchlist(movie.id));
             toast.info(`Removed "${movie.title}" from watchlist`);
        } else {
            dispatch(addToWatchlist(movie));
            toast.success(`Added "${movie.title}" to watchlist`);
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
