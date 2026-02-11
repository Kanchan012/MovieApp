import { useAppDispatch, useAppSelector } from './hooks';
import { setReviews, setLoading, setError } from './slices/reviewsSlice';
import { fetchMovieReviews } from '../services/tmdbApi';

export const useReviews = (movieId?: string) => {
    const dispatch = useAppDispatch();
    const reviewsState = useAppSelector((state) => state.reviews);

    const movieReviews = movieId ? reviewsState.reviewsByMovie[Number(movieId)] || [] : [];
    const loading = reviewsState.loading;
    const error = reviewsState.error;

    const getReviews = async (id: string) => {
        try {
            dispatch(setLoading(true));
            const data = await fetchMovieReviews(id);
            dispatch(setReviews({ movieId: Number(id), reviews: data.results }));
            dispatch(setError(null));
        } catch (err) {
            console.error("Failed to fetch reviews:", err);
            dispatch(setError("Failed to load reviews."));
        } finally {
            dispatch(setLoading(false));
        }
    };

    return {
        reviews: movieReviews,
        loading,
        error,
        getReviews,
    };
};
