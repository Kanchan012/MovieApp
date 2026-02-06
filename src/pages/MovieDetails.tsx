import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { fetchMovieDetails, fetchMovieReviews, type MovieDetail, type Review } from '../services/tmdbApi';
import { FaStar } from "react-icons/fa";
import './MovieDetails.css';

const MovieDetails = () => {
    const { id } = useParams<{ id: string }>();
    const navigate = useNavigate();
    const [movie, setMovie] = useState<MovieDetail | null>(null);
    const [reviews, setReviews] = useState<Review[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const getDetails = async () => {
            if (!id) return;
            try {
                setLoading(true);
                const [movieData, reviewsData] = await Promise.all([
                    fetchMovieDetails(id),
                    fetchMovieReviews(id)
                ]);
                setMovie(movieData);
                setReviews(reviewsData.results);
            } catch (err) {
                console.error("Failed to fetch movie details or reviews:", err);
                setError("Failed to load movie details. Please try again later.");
            } finally {
                setLoading(false);
            }
        };

        getDetails();
        window.scrollTo(0, 0);
    }, [id]);

    if (loading) {
        return (
            <div className="movie-details-container loading-state">
                <div className="loader"></div>
            </div>
        );
    }

    if (error || !movie) {
        return (
            <div className="movie-details-container error-state">
                <p>{error || "Movie not found"}</p>
                <button onClick={() => navigate(-1)} className="back-button">Go Back</button>
            </div>
        );
    }

    const backdropUrl = movie.backdrop_path
        ? `https://image.tmdb.org/t/p/original${movie.backdrop_path}`
        : "https://via.placeholder.com/1920x1080?text=No+Backdrop+Available";

    const posterUrl = movie.poster_path
        ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
        : "https://via.placeholder.com/500x750?text=No+Poster";

    return (
        <div className="movie-details-container">
            <button onClick={() => navigate(-1)} className="back-button">
                <span>←</span> Back
            </button>

            <div className="backdrop-container">
                <img src={backdropUrl} alt={movie.title} className="backdrop-image" />
                <div className="backdrop-overlay"></div>
            </div>

            <div className="details-content">
                <div className="details-poster">
                    <img src={posterUrl} alt={movie.title} />
                </div>

                <div className="details-info">
                    <h1 className="movie-title-large">{movie.title}</h1>

                    <div className="movie-meta">
                        <span className="release-year">{movie.release_date?.split('-')[0]}</span>
                        <span className="runtime">{movie.runtime} min</span>
                        <span className="rating"><FaStar />{movie.vote_average.toFixed(1)}/10</span>
                    </div>

                    <div className="overview-section">
                        <h2>Overview</h2>
                        <p className="overview-text">{movie.overview}</p>
                    </div>

                    <div className="genres-section">
                        <div className="genres-container">
                            {movie.genres.map(genre => (
                                <span key={genre.id} className="genre-tag">{genre.name}</span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            <div className="reviews-section">
                <h2 className="section-title">Reviews</h2>
                <div className="reviews-container">
                    {reviews.length > 0 ? (
                        reviews.map(review => (
                            <div key={review.id} className="review-card">
                                <div className="review-header">
                                    <div className="author-info">
                                        <div className="author-avatar">
                                            {review.author_details.avatar_path ? (
                                                <img
                                                    src={review.author_details.avatar_path.startsWith('/http')
                                                        ? review.author_details.avatar_path.substring(1)
                                                        : `https://image.tmdb.org/t/p/w200${review.author_details.avatar_path}`}
                                                    alt={review.author}
                                                />
                                            ) : (
                                                <div className="avatar-placeholder">{review.author[0].toUpperCase()}</div>
                                            )}
                                        </div>
                                        <div className="author-details">
                                            <h3>{review.author}</h3>
                                            <span className="review-date">{new Date(review.created_at).toLocaleDateString()}</span>
                                        </div>
                                    </div>
                                    {review.author_details.rating && (
                                        <div className="review-rating"><FaStar />
{review.author_details.rating}/10</div>
                                    )}
                                </div>
                                <div className="review-content">
                                    <p>{review.content}</p>
                                </div>
                            </div>
                        ))
                    ) : (
                        <p className="no-reviews">No reviews available for this movie.</p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default MovieDetails;
