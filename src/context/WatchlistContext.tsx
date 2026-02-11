import React, { createContext, useContext, useState, useEffect } from 'react';
import type { MovieDetail } from '../services/tmdbApi';

interface WatchlistContextType {
    watchlist: MovieDetail[];
    addToWatchlist: (movie: MovieDetail) => void;
    removeFromWatchlist: (movieId: number) => void;
    isInWatchlist: (movieId: number) => boolean;
}

const WatchlistContext = createContext<WatchlistContextType | undefined>(undefined);

export const WatchlistProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [watchlist, setWatchlist] = useState<MovieDetail[]>([]);

    // Load watchlist from localStorage on mount
    useEffect(() => {
        const savedWatchlist = localStorage.getItem('movieWatchlist');
        if (savedWatchlist) {
            try {
                setWatchlist(JSON.parse(savedWatchlist));
            } catch (error) {
                console.error("Failed to parse watchlist from localStorage:", error);
            }
        }
    }, []);

    // Save watchlist to localStorage whenever it changes
    useEffect(() => {
        localStorage.setItem('movieWatchlist', JSON.stringify(watchlist));
    }, [watchlist]);

    const addToWatchlist = (movie: MovieDetail) => {
        setWatchlist((prev) => {
            if (prev.some((m) => m.id === movie.id)) return prev;
            return [...prev, movie];
        });
    };

    const removeFromWatchlist = (movieId: number) => {
        setWatchlist((prev) => prev.filter((movie) => movie.id !== movieId));
    };

    const isInWatchlist = (movieId: number) => {
        return watchlist.some((movie) => movie.id === movieId);
    };

    return (
        <WatchlistContext.Provider value={{ watchlist, addToWatchlist, removeFromWatchlist, isInWatchlist }}>
            {children}
        </WatchlistContext.Provider>
    );
};

export const useWatchlist = () => {
    const context = useContext(WatchlistContext);
    if (context === undefined) {
        throw new Error('useWatchlist must be used within a WatchlistProvider');
    }
    return context;
};
