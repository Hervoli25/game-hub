import apiClient from "../services/api-client";
import { useEffect, useState } from "react";

interface Genre {
  id: number;
  name: string;
}

interface FetchGenresResponse {
  count: number;
  results: Genre[];
}

const useGenres = () => {
  const [genres, setGenres] = useState<Genre[]>([]);
  const [error, setError] = useState<string>("");
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();
    setLoading(true);

    apiClient
      .get<FetchGenresResponse>("/genres", { signal: controller.signal })
      .then((res) => {
        console.log(res.data);
        setGenres(res.data.results);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        if (err.name === "AbortError") {
          setError("Request was canceled");
        } else {
          setError(
            err.response
              ? `Error ${err.response.status}: ${err.response.statusText}`
              : "An error occurred"
          );
        }
        setLoading(false);
      });

    return () => controller.abort();
  }, []);

  return { genres, error, isLoading };
};

export default useGenres;
