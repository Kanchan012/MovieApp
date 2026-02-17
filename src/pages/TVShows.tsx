import { useEffect } from "react";
import { useMovies } from "../redux/useMovies";
import MovieGrid from "../components/common/MovieGrid";
import "./TVShows.css";

const TVShows: React.FC = () => {
    const { tvShows, loading, error, getTVShows } = useMovies();

    useEffect(() => {
        getTVShows();
    }, []);

    if (loading) return <div className="loading-state"><div className="loader"></div></div>;
    if (error) return <div className="error-message">{error}</div>;

    return (
        <div className="tvshows-container">
            <h1 className="page-title">Popular TV Shows</h1>
            <MovieGrid
                movies={tvShows}
                gridClassName="tvshows-grid"
                cardClassName="tvshows-card"
            />
        </div>
    );
};

export default TVShows;
