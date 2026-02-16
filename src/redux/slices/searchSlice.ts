import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { TrendingItem } from '../../services/tmdbApi';

interface SearchState {
    results: TrendingItem[];
    query: string;
    loading: boolean;
    error: string | null;
}

const initialState: SearchState = {
    results: [],
    query: '',
    loading: false,
    error: null,
};

const searchSlice = createSlice({
    name: 'search',
    initialState,
    reducers: {
        setSearchQuery: (state, action: PayloadAction<string>) => {
            state.query = action.payload;
        },
        setSearchResults: (state, action: PayloadAction<TrendingItem[]>) => {
            state.results = action.payload;
        },
        setSearchLoading: (state, action: PayloadAction<boolean>) => {
            state.loading = action.payload;
        },
        setSearchError: (state, action: PayloadAction<string | null>) => {
            state.error = action.payload;
        },
        clearSearch: (state) => {
            state.results = [];
            state.query = '';
            state.loading = false;
            state.error = null;
        },
    },
});

export const {
    setSearchQuery,
    setSearchResults,
    setSearchLoading,
    setSearchError,
    clearSearch,
} = searchSlice.actions;

export default searchSlice.reducer;
