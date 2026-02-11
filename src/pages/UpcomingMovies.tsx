import { useEffect } from "react";
import { useMovies } from "../redux/useMovies";
import MovieGrid from "../components/common/MovieGrid";
import "./UpcomingMovies.css";

function UpcomingMovies() {
    const { upcoming, loading, error, getUpcoming } = useMovies();

    useEffect(() => {
        getUpcoming();
    }, []);

    if (loading) {
        return (
            <div className="upcoming-loading">
                <div className="spinner"></div>
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
                movies={upcoming}
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
