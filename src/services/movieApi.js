const API_KEY = import.meta.env.VITE_API_KEY;
const BASE_URL = "https://api.themoviedb.org/3";
const IMAGE_BASE = "https://image.tmdb.org/t/p/";

export async function fetchMoviesByCategory(category, page = 1) {
    const url = `${BASE_URL}/movie/${category}?api_key=${API_KEY}&language=fr-FR&page=${page}`;
    const res = await fetch(url);
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    return res.json();
}

export async function searchMovies(query, page = 1) {
    const url = `${BASE_URL}/search/movie?api_key=${API_KEY}&language=fr-FR&query=${encodeURIComponent(
        query
    )}&page=${page}`;
    const res = await fetch(url);
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    return res.json();
}

export async function fetchSimilarMovies(movieId, limit = 5) {
    const url = `${BASE_URL}/movie/${movieId}/similar?api_key=${API_KEY}&language=fr-FR`;
    const res = await fetch(url);
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const data = await res.json();
    return data.results.slice(0, limit);
}

async function fetchJson(url) {
    const res = await fetch(url);
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    return res.json();
}

export async function fetchMovieDetail(movieId) {
    const url = `${BASE_URL}/movie/${movieId}?api_key=${API_KEY}&language=fr-FR`;
    return fetchJson(url);
}

export async function fetchMovieCredits(movieId, limit = 10) {
    const url = `${BASE_URL}/movie/${movieId}/credits?api_key=${API_KEY}&language=fr-FR`;
    const data = await fetchJson(url);
    return data.cast.slice(0, limit);
}

export const getImageUrl = (path, size = "w500") => `${IMAGE_BASE}${size}${path}`;