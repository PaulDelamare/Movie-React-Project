import { useEffect, useState } from "react";
import { fetchMoviesByCategory, searchMovies } from "../services/movieApi";

export function useMovies({ selectedCat, search, page }) {
  const [movies, setMovies] = useState([]);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(true);

  useEffect(() => {

    let active = true;
    setLoading(true);

    const load = async () => {
      try {
        const data = search?.trim()
          ? await searchMovies(search, page)
          : await fetchMoviesByCategory(selectedCat, page);

        if (!active) return;

        setMovies(data.results || []);
        setTotalPages(data.total_pages || 1);

      } catch {

        if (active) setMovies([]);
      } finally {

        if (active) setLoading(false);
      }
    };

    load();

    return () => {
      active = false;
    };
  }, [selectedCat, search, page]);

  return { movies, totalPages, loading };
}
