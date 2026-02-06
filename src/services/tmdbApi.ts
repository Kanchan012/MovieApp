const BASE_URL = "https://api.themoviedb.org/3";

export interface TrendingItem {
  id: number;
  title?: string;
  name?: string;
  poster_path: string | null;
}

export interface TrendingResponse {
  results: TrendingItem[];
}

export async function fetchTrending(): Promise<TrendingResponse> {
  const token = import.meta.env.VITE_TMDB_TOKEN;

  const response = await fetch(
    `${BASE_URL}/trending/all/day?language=en-US`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
        accept: "application/json",
      },
    }
  );

  if (!response.ok) {
    throw new Error("TMDB fetch failed");
  }

  return response.json();
}

export interface MovieDetail {
  id: number;
  title: string;
  overview: string;
  poster_path: string | null;
  backdrop_path: string | null;
  release_date: string;
  vote_average: number;
  genres: { id: number; name: string }[];
  runtime: number;
}

export interface Review {
  id: string;
  author: string;
  content: string;
  created_at: string;
  author_details: {
    name: string;
    username: string;
    avatar_path: string | null;
    rating: number | null;
  };
}

export interface MovieReviewsResponse {
  results: Review[];
}

export async function fetchLatestMovies(): Promise<TrendingResponse> {
  const token = import.meta.env.VITE_TMDB_TOKEN;

  const response = await fetch(`${BASE_URL}/movie/now_playing?language=en-US&page=1`, {
    headers: {
      Authorization: `Bearer ${token}`,
      accept: "application/json",
    },
  });

  if (!response.ok) {
    throw new Error("TMDB fetch now playing failed");
  }

  return response.json();
}
export async function fetchUpcomingMovies(): Promise<TrendingResponse> {
  const token = import.meta.env.VITE_TMDB_TOKEN;

  const response = await fetch(`${BASE_URL}/movie/upcoming?language=en-US&page=1`, {
    headers: {
      Authorization: `Bearer ${token}`,
      accept: "application/json",
    },
  });

  if (!response.ok) {
    throw new Error("TMDB fetch upcoming failed");
  }

  return response.json();
}
export async function fetchMovieDetails(movieId: string): Promise<MovieDetail> {
  const token = import.meta.env.VITE_TMDB_TOKEN;

  const response = await fetch(`${BASE_URL}/movie/${movieId}?language=en-US`, {
    headers: {
      Authorization: `Bearer ${token}`,
      accept: "application/json",
    },
  });

  if (!response.ok) {
    throw new Error("TMDB fetch movie details failed");
  }

  return response.json();
}

export async function fetchMovieReviews(movieId: string): Promise<MovieReviewsResponse> {
  const token = import.meta.env.VITE_TMDB_TOKEN;

  const response = await fetch(`${BASE_URL}/movie/${movieId}/reviews?language=en-US&page=1`, {
    headers: {
      Authorization: `Bearer ${token}`,
      accept: "application/json",
    },
  });

  if (!response.ok) {
    throw new Error("TMDB fetch movie reviews failed");
  }

  return response.json();
}

