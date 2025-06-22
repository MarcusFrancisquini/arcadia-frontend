import axios from "axios";

export interface Game {
  _id?: string;
  name: string;
  platforms: string[];
  description: string;
  rating: number;
  imageUrl: string;
  releaseDate: string;
  developer: string;
  publisher: string;
  genres: string[];
  ageRating: string;
  isFavorite: boolean;
}

const API_URL = import.meta.env.VITE_API_URL;

//? Read - GET
export async function getGames(): Promise<Game[]> {
  const response = await axios.get<Game[]>(API_URL);
  return response.data;
}

//? Update favorite games - PATCH
export async function toggleFavorite(
  gameId: string,
  isCurrentlyFavorite: boolean
): Promise<Game> {
  const response = await axios.patch<Game>(`${API_URL}/${gameId}`, {
    isFavorite: !isCurrentlyFavorite,
  });
  return response.data;
}

//? GET BY ID
export async function getGameById(id: string): Promise<Game> {
  const response = await axios.get<Game>(`${API_URL}/${id}`);
  return response.data;
}
