import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import moviesReducer from "./slices/movieSlice.ts";
import watchlistReducer from "./slices/watchlistSlice.ts";
import reviewsReducer from "./slices/reviewsSlice.ts";
import searchReducer from "./slices/searchSlice.ts";

const rootReducer = combineReducers({
    movies: moviesReducer,
    watchlist: watchlistReducer,
    reviews: reviewsReducer,
    search: searchReducer,
});

const persistConfig = {
    key: 'root',
    version: 1,
    storage,
    whitelist: ['watchlist', 'movies'],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }),
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
