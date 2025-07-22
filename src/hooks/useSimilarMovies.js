import { useState, useEffect } from "react";
import { fetchSimilarMovies } from "../services/movieApi";

export function useSimilarMovies(movieId) {
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (!movieId) return;

        let active = true;
        setLoading(true);
        setError(null);

        fetchSimilarMovies(movieId)
            .then(list => {
                if (active) setMovies(list);
            })
            .catch(err => {
                if (active) setError(err);
            })
            .finally(() => {
                if (active) setLoading(false);
            });

        return () => {
            active = false;
        };
    }, [movieId]);

    return { movies, loading, error };
}
