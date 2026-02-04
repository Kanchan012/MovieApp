import { useEffect, useState } from "react";
import { type TrendingItem } from "../services/tmdbApi";
import "./UpcomingMovies.css";

function UpcomingMovies() {
    const [movies, setMovies] = useState<TrendingItem[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchUpcoming = async () => {
            const token = import.meta.env.VITE_TMDB_TOKEN;
            const options = {
                method: 'GET',
                headers: {
                    accept: 'application/json',
                    Authorization: `Bearer ${token}`
                }
            };

            try {
                setLoading(true);
                const response = await fetch('https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1', options);
                if (!response.ok) {
                    throw new Error("Failed to fetch upcoming movies");
                }
                const data = await response.json();
                setMovies(data.results);
            } catch (err) {
                setError("Error loading upcoming movies.");
                console.error(err);
            } finally {
                setLoading(false);
            }
        };

        fetchUpcoming();
    }, []);

    if (loading) {
        return (
            <div className="upcoming-loading">
                <div className="spinner">Loading...</div>
            </div>
        );
    }

    if (error) {
        return <div className="upcoming-error">{error}</div>;
    }

    return (
        <div className="upcoming-container">
            <h1 className="upcoming-title">Upcoming Movies</h1>
            <div className="upcoming-grid">
                {movies.map((movie) => (
                    <div key={movie.id} className="upcoming-card">
                        <div className="poster-container">
                            {movie.poster_path ? (
                                <img
                                    src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                                    alt={movie.title || movie.name}
                                    className="upcoming-poster"
                                />
                            ) : (
                                <div className="no-poster">
                                    <i className="fas fa-film"></i>
                                </div>
                            )}
                        </div>
                        <div className="upcoming-info">
                            <h3 className="movie-name">{movie.title || movie.name}</h3>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default UpcomingMovies;
