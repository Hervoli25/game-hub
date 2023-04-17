import apiClient from "../services/api-client";
import { useEffect, useState } from "react";



interface FetchResponse<T> {
  count: number;
  results: T[];
}

const useData = <T>(endpoint: string ) => {
  const [data, setData] = useState<T[]>([]);
  const [error, setError] = useState<string>("");
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();
    setLoading(true);

    apiClient
      .get<FetchResponse <T>>(endpoint, { signal: controller.signal })
      .then((res) => {
        console.log(res.data);
        setData(res.data.results);
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

  return {data, error, isLoading };
};

export default useData;
