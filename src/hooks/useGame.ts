import useData from './useData';
import { Genre } from './useGenres';

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

export interface Game {
  [x: string]: any;
  platform: Platform;
  genres: any;
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
}

export interface GameQuery {
  sortOrder: any;
  platform: Platform | null;
  genre: Genre | null;
}

export const useGame = (gameQuery: GameQuery) => {
  const params: Record<string, string> = {};

  if (gameQuery?.genre?.id) {
    params.genres = gameQuery.genre.id.toString();
  }
  if (gameQuery?.platform?.id) {
    params.platforms = gameQuery.platform.id.toString();
  }

   if (gameQuery?.sortOrder) {
    params.ordering = gameQuery.sortOrder;
  }

  return useData<Game>('/games', { params }, [gameQuery.genre?.id, gameQuery.platform?.id, gameQuery.sortOrder]);
};
export default useGame;
