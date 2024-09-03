import { useState, useEffect, useCallback } from "react";
import axios from "axios";

export const useFetchCategories = (
  url: string
): [string[], boolean, string | null] => {
  const [categories, setCategories] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchCategories = useCallback(async () => {
    setIsLoading(true);
    setError(null);

    try {
      const res = await axios.get(url);
      setCategories(res.data);
    } catch (error) {
      setError("Error fetching categories");
      console.error("Error fetching categories:", error);
    } finally {
      setIsLoading(false);
    }
  }, [url]);

  useEffect(() => {
    fetchCategories();
  }, [fetchCategories]);

  return [categories, isLoading, error];
};
