import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { searchMovies } from "../services/tmdbApi";
import { setSearchResults, setSearchLoading, setSearchError } from "../redux/slices/searchSlice";
import MovieGrid from "../components/common/MovieGrid";
import "./SearchResults.css";

const SearchResults = () => {
    const [searchParams] = useSearchParams();
    const query = searchParams.get("q") || "";
    const dispatch = useAppDispatch();
    const { results, loading, error } = useAppSelector((state) => state.search);

    useEffect(() => {
        const fetchResults = async () => {
            if (!query) return;

            dispatch(setSearchLoading(true));
            dispatch(setSearchError(null));
            try {
                const data = await searchMovies(query);
                dispatch(setSearchResults(data.results));
            } catch (err) {
                dispatch(setSearchError("Failed to fetch search results. Please try again later."));
                console.error(err);
            } finally {
                dispatch(setSearchLoading(false));
            }
        };

        fetchResults();
    }, [query, dispatch]);

    return (
        <div className="search-results-page">
            <div className="search-results-container">
                <h1 className="search-title">
                    {query ? `Search Results for "${query}"` : "Search for movies"}
                </h1>

                {loading ? (
                    <div className="loader-container">
                        <div className="loader"></div>
                    </div>
                ) : error ? (
                    <div className="error-message">{error}</div>
                ) : results.length > 0 ? (
                    <MovieGrid
                        movies={results}
                        gridClassName="home-movies-grid"
                        cardClassName="home-movie-card"
                        imageClassName="home-movie-poster"
                        infoClassName="home-movie-info"
                    />
                ) : query ? (
                    <div className="no-movies">
                        <h2>No related movies found</h2>
                        <p>Try searching with different keywords.</p>
                    </div>
                ) : null}
            </div>
        </div>
    );
};

export default SearchResults;
