import React from 'react';
import type { TrendingItem } from '../../services/tmdbApi';
import MovieCard from './MovieCard';

interface MovieGridProps {
    movies: TrendingItem[];
    title?: string;
    containerClassName?: string;
    gridClassName?: string;
    cardClassName?: string;
    imageClassName?: string;
    infoClassName?: string;
}

const MovieGrid: React.FC<MovieGridProps> = ({
    movies,
    title,
    containerClassName,
    gridClassName,
    cardClassName,
    imageClassName,
    infoClassName
}) => {
    return (
        <div className={containerClassName}>
            {title && <h2>{title}</h2>}
            <div className={gridClassName}>
                {movies.map((movie) => (
                    <MovieCard
                        key={movie.id}
                        movie={movie}
                        className={cardClassName}
                        imageClassName={imageClassName}
                        infoClassName={infoClassName}
                    />
                ))}
            </div>
        </div>
    );
};

export default MovieGrid;
