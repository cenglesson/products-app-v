import { useState, useEffect, useCallback } from "react";
import axios from "axios";
import { Products } from "../types/types";

export const useFetchProducts = (
  initialUrl: string,
  limit: number,
  skip: number,
  sortOption: string,
  filterCategory: string,
  searchQuery: string
): [Products[], boolean, string | null] => {
  const [data, setData] = useState<Products[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchProducts = useCallback(async () => {
    setIsLoading(true);
    setError(null);

    try {
      let url = `${initialUrl}?limit=${limit}&skip=${skip}`;

      if (searchQuery) {
        url = `${initialUrl}/search?q=${encodeURIComponent(searchQuery)}`;
      } else {
        if (filterCategory) {
          url = `${initialUrl}/category/${filterCategory}?limit=${limit}&skip=${skip}`;
        }

        if (sortOption !== "default") {
          const [sortField, sortOrder] = sortOption.split("-");
          url += `&sortBy=${sortField}&order=${sortOrder}`;
        }
      }

      const res = await axios.get(url);

      if (skip === 0) {
        setData(res.data.products);
      } else {
        setData((prevData) => [...prevData, ...res.data.products]);
      }
    } catch (error) {
      setError("Error fetching data");
      console.error("Error fetching data:", error);
    } finally {
      setIsLoading(false);
    }
  }, [initialUrl, limit, skip, sortOption, filterCategory, searchQuery]);

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  return [data, isLoading, error];
};
