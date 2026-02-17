import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { TrendingItem } from '../../services/tmdbApi';

interface MoviesState {
    trending: TrendingItem[];
    latest: TrendingItem[];
    upcoming: TrendingItem[];
    tvShows: TrendingItem[];
    loading: boolean;
    error: string | null;
}

const initialState: MoviesState = {
    trending: [],
    latest: [],
    upcoming: [],
    tvShows: [],
    loading: false,
    error: null,
};

const moviesSlice = createSlice({
    name: 'movies',
    initialState,
    reducers: {
        setTrending: (state, action: PayloadAction<TrendingItem[]>) => {
            state.trending = action.payload;
        },
        setLatest: (state, action: PayloadAction<TrendingItem[]>) => {
            state.latest = action.payload;
        },
        setUpcoming: (state, action: PayloadAction<TrendingItem[]>) => {
            state.upcoming = action.payload;
        },
         setTVShows: (state, action: PayloadAction<TrendingItem[]>) => {
            state.tvShows = action.payload;
        },
        setLoading: (state, action: PayloadAction<boolean>) => {
            state.loading = action.payload;
        },
        setError: (state, action: PayloadAction<string | null>) => {
            state.error = action.payload;
        },
    },
});

export const { setTrending, setLatest, setUpcoming, setTVShows,  setLoading, setError } = moviesSlice.actions;
export default moviesSlice.reducer;
