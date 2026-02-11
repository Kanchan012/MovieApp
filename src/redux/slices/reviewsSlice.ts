import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { Review } from '../../services/tmdbApi';

interface ReviewsState {
    reviewsByMovie: Record<number, Review[]>;
    loading: boolean;
    error: string | null;
}

const initialState: ReviewsState = {
    reviewsByMovie: {},
    loading: false,
    error: null,
};

const reviewsSlice = createSlice({
    name: 'reviews',
    initialState,
    reducers: {
        setReviews: (state, action: PayloadAction<{ movieId: number; reviews: Review[] }>) => {
            const { movieId, reviews } = action.payload;
            state.reviewsByMovie[movieId] = reviews;
        },
        setLoading: (state, action: PayloadAction<boolean>) => {
            state.loading = action.payload;
        },
        setError: (state, action: PayloadAction<string | null>) => {
            state.error = action.payload;
        },
    },
});

export const { setReviews, setLoading, setError } = reviewsSlice.actions;
export default reviewsSlice.reducer;
