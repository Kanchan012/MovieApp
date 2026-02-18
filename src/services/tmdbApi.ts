import axios from 'axios';

const BASE_URL = "https://api.themoviedb.org/3";
const token = import.meta.env.VITE_TMDB_TOKEN;

const axiosInstance = axios.create({
  baseURL: BASE_URL,
  headers: {
    Authorization: `Bearer ${token}`,
    accept: "application/json",
  },
});

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
  const response = await axiosInstance.get<TrendingResponse>("/trending/all/day?language=en-US");
  return response.data;
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
  const response = await axiosInstance.get<TrendingResponse>("/movie/now_playing?language=en-US&page=1");
  return response.data;
}

export async function fetchUpcomingMovies(): Promise<TrendingResponse> {
  const response = await axiosInstance.get<TrendingResponse>("/movie/upcoming?language=en-US&page=1");
  return response.data;
}

export async function fetchMovieDetails(movieId: string): Promise<MovieDetail> {
  const response = await axiosInstance.get<MovieDetail>(`/movie/${movieId}?language=en-US`);
  return response.data;
}

export async function fetchMovieReviews(movieId: string): Promise<MovieReviewsResponse> {
  const response = await axiosInstance.get<MovieReviewsResponse>(`/movie/${movieId}/reviews?language=en-US&page=1`);
  return response.data;
}

export async function searchMovies(query: string): Promise<TrendingResponse> {
  const response = await axiosInstance.get<TrendingResponse>(
    `/search/movie?query=${encodeURIComponent(query)}&include_adult=false&language=en-US&page=1`
  );
  return response.data;
}

export async function fetchTVShows(): Promise<TrendingResponse> {
  const response = await axiosInstance.get<TrendingResponse>(
    "/discover/tv?include_adult=false&include_null_first_air_dates=false&language=en-US&page=1&sort_by=popularity.desc"
  );
  return response.data;
}
