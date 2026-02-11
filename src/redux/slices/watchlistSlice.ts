import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { MovieDetail } from '../../services/tmdbApi';

interface WatchlistState {
    items: MovieDetail[];
}

const loadWatchlist = (): MovieDetail[] => {
    try {
        const saved = localStorage.getItem('movieWatchlist');
        return saved ? JSON.parse(saved) : [];
    } catch (error) {
        console.error("Failed to load watchlist from localStorage:", error);
        return [];
    }
};

const initialState: WatchlistState = {
    items: loadWatchlist(),
};

const watchlistSlice = createSlice({
    name: 'watchlist',
    initialState,
    reducers: {
        addToWatchlist: (state, action: PayloadAction<MovieDetail>) => {
            if (!state.items.some(movie => movie.id === action.payload.id)) {
                state.items.push(action.payload);
                localStorage.setItem('movieWatchlist', JSON.stringify(state.items));
            }
        },
        removeFromWatchlist: (state, action: PayloadAction<number>) => {
            state.items = state.items.filter(movie => movie.id !== action.payload);
            localStorage.setItem('movieWatchlist', JSON.stringify(state.items));
        },
    },
});

export const { addToWatchlist, removeFromWatchlist } = watchlistSlice.actions;
export default watchlistSlice.reducer;
