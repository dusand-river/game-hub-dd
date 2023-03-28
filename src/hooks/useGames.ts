import { useEffect, useState } from "react";
import apiClient, { CanceledError } from "../services/api-client";

interface Game {
  id: number;
  name: string;
}

interface FetchGamesResponse {
  count: number;
  results: Game[];
}

const useGames = () => {
  const controler = new AbortController();

  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState("");
  //const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    apiClient
      .get<FetchGamesResponse>("/games", {
        signal: controler.signal,
      })
      .then((res) => setGames(res.data.results))
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
      });

    //return () => controler.abort();  // not working properly????
  }, []);

  return { games, error };
};

export default useGames;
