import { useEffect, useState } from 'react';
import apiClient from "../services/api-client"

export interface Game {
  id: number;
  name: string;
  background_image: string;
}

interface FetchGamesResponse {
  count: number;
  results: Game[];
}

const useGame = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState<string>('');

  useEffect(() => {
    const controller = new AbortController();

    apiClient
      .get<FetchGamesResponse>('/games', { signal: controller.signal })
      .then((res) => {
        console.log(res.data); // log the response data
        setGames(res.data.results);
      })
      .catch((err) => {
        console.error(err); // log any errors
        if (err.name === 'AxiosError' && err.response) {
          setError(`Error ${err.response.status}: ${err.response.statusText}`);
        } else if (err.name === 'AbortError') {
          setError('Request was canceled');//This is the error that is thrown when the request is aborted
        } else {
          setError('');
        }
      });

    return () => controller.abort();
  }, []);

  return { games, error };
};

export default useGame;
