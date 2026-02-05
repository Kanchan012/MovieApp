import { useEffect, useState } from "react";
import { fetchUpcomingMovies, type TrendingItem } from "../services/tmdbApi";
import MovieGrid from "../components/common/MovieGrid";
import "./UpcomingMovies.css";

function UpcomingMovies() {
    const [movies, setMovies] = useState<TrendingItem[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const getUpcoming = async () => {
            try {
                setLoading(true);
                const data = await fetchUpcomingMovies();
                setMovies(data.results);
            } catch (err) {
                setError("Error loading upcoming movies.");
                console.error(err);
            } finally {
                setLoading(false);
            }
        };

        getUpcoming();
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
        <header className="upcoming-header">
        <h1>Upcoming Movies</h1>
      </header>
        <MovieGrid
            movies={movies}
            containerClassName="upcoming-container"
            gridClassName="upcoming-grid"
            cardClassName="upcoming-card"
            imageClassName="upcoming-poster"
            infoClassName="upcoming-info"
        />
        </div>
    );
}

export default UpcomingMovies;
