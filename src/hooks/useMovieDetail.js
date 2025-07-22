import { useState, useEffect } from "react";
import { fetchMovieDetail, fetchMovieCredits } from "../services/movieApi";

export function useMovieDetail(movieId) {
    const [movie, setMovie] = useState(null);
    const [actors, setActors] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (!movieId) return;

        let active = true;
        setLoading(true);
        setError(null);

        async function load() {
            try {
                const [detail, cast] = await Promise.all([
                    fetchMovieDetail(movieId),
                    fetchMovieCredits(movieId),
                ]);
                if (!active) return;
                setMovie(detail);
                setActors(cast);
            } catch (err) {
                if (active) setError(err);
            } finally {
                if (active) setLoading(false);
            }
        }

        load();
        return () => { active = false; };
    }, [movieId]);

    return { movie, actors, loading, error };
}
