import { useAppDispatch, useAppSelector } from './hooks';
import { setTrending, setLatest, setUpcoming, setLoading, setError } from './slices/movieSlice';
import { fetchTrending, fetchLatestMovies, fetchUpcomingMovies } from '../services/tmdbApi';

export const useMovies = () => {
    const dispatch = useAppDispatch();
    const moviesState = useAppSelector((state) => state.movies);

    const getTrending = async () => {
        try {
            dispatch(setLoading(true));
            const data = await fetchTrending();
            dispatch(setTrending(data.results));
            dispatch(setError(null));
        } catch (err) {
            dispatch(setError("Failed to fetch trending movies."));
        } finally {
            dispatch(setLoading(false));
        }
    };

    const getLatest = async () => {
        try {
            dispatch(setLoading(true));
            const data = await fetchLatestMovies();
            dispatch(setLatest(data.results));
            dispatch(setError(null));
        } catch (err) {
            dispatch(setError("Failed to fetch latest movies."));
        } finally {
            dispatch(setLoading(false));
        }
    };

    const getUpcoming = async () => {
        try {
            dispatch(setLoading(true));
            const data = await fetchUpcomingMovies();
            dispatch(setUpcoming(data.results));
            dispatch(setError(null));
        } catch (err) {
            dispatch(setError("Failed to fetch upcoming movies."));
        } finally {
            dispatch(setLoading(false));
        }
    };

    const getHomeMovies = async () => {
        try {
            dispatch(setLoading(true));
            const [trending, latest, upcoming] = await Promise.all([
                fetchTrending(),
                fetchLatestMovies(),
                fetchUpcomingMovies()
            ]);

            dispatch(setTrending(trending.results.slice(0, 12)));
            dispatch(setLatest(latest.results.slice(0, 12)));
            dispatch(setUpcoming(upcoming.results.slice(0, 12)));
            dispatch(setError(null));
        } catch (err) {
            dispatch(setError("Failed to load movies."));
        } finally {
            dispatch(setLoading(false));
        }
    };

    return {
        trending: moviesState.trending,
        latest: moviesState.latest,
        upcoming: moviesState.upcoming,
        loading: moviesState.loading,
        error: moviesState.error,
        getTrending,
        getLatest,
        getUpcoming,
        getHomeMovies,
    };
};
