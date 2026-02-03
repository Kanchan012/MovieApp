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
