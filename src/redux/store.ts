import { configureStore } from '@reduxjs/toolkit';
import moviesReducer from "./slices/movieSlice.ts";
import watchlistReducer from "./slices/watchlistSlice.ts";
import reviewsReducer from "./slices/reviewsSlice.ts";
import searchReducer from "./slices/searchSlice.ts";

export const store = configureStore({
    reducer: {
        movies: moviesReducer,
        watchlist: watchlistReducer,
        reviews: reviewsReducer,
        search: searchReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
