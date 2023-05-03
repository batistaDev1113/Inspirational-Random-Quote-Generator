import { useState, useEffect } from "react";

const API_URL = "https://api.api-ninjas.com/v1/quotes?category=";
export const useFetchData = (input) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    fetch(API_URL + `${input}`, {
      headers: { "X-Api-Key": import.meta.env.VITE_API_KEY },
    })
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((error) => setError(error));
    setLoading(false);
  }, [input]);

  return { data, loading, error };
};
