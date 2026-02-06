import React from 'react';
import type { TrendingItem } from '../../services/tmdbApi';
import { Link } from 'react-router-dom';

interface MovieCardProps {
    movie: TrendingItem;
    className?: string;
    imageClassName?: string;
    infoClassName?: string;
}

const MovieCard: React.FC<MovieCardProps> = ({ movie, className, imageClassName, infoClassName }) => {
    const imageUrl = movie.poster_path
        ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
        : "https://via.placeholder.com/300x450?text=No+Image";

    return (
         <Link to={`/movie/${movie.id}`} className={className} style={{ textDecoration: 'none', color: 'inherit' }}>
            <div className="poster-wrapper">
                <img
                    src={imageUrl}
                    alt={movie.title || movie.name || "Movie poster"}
                    className={imageClassName}
                />
            </div>
            <div className={infoClassName}>
                <h4 className="movie-title">{movie.title || movie.name}</h4>
            </div>
        </Link>
    );
};

export default MovieCard;
