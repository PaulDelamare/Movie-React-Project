import { useState, useEffect } from "react";
import styles from "./MovieList.module.css";
import MovieCard from "../movieCard/MovieCard";
import { useDebounce } from "../../hooks/useDebounce";
import { useMovies } from "../../hooks/useMovie";
import SearchBar from "../utils/searchBar/Searchbar";
import ListFilterCategory from "../utils/listfFilterCategory/ListFilterCategory";
import Pagination from "../utils/pagination/Pagination";

const categories = {
  now_playing: "A l'affiche",
  popular: "Populaire",
  top_rated: "Les mieux notés",
  upcoming: "À venir",
};

export default function MovieListPage() {
  const [selectedCat, setSelectedCat] = useState("popular");
  const [filter, setFilter] = useState("");
  const debouncedFilter = useDebounce(filter, 500);

  const [page, setPage] = useState(1);
  const { movies, totalPages, loading } = useMovies({
    selectedCat,
    search: debouncedFilter,
    page,
  });

  useEffect(() => {
    setPage(1);
  }, [selectedCat, debouncedFilter]);

  return (
    <div className={styles.container}>
      <h1 className={styles.header}>Films – {categories[selectedCat]}</h1>

      <ListFilterCategory
        categories={categories}
        selectedCat={selectedCat}
        setSelectedCat={setSelectedCat}
        filter={filter}
      />

      <SearchBar
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
        placeholder="Rechercher un film…"
      />

      {loading ? (
        <p className={styles.loading}>Chargement…</p>
      ) : (
        <>
          <ul className={styles.list}>
            {movies.map((movie) => (
              <MovieCard
                key={movie.id}
                id={movie.id}
                title={movie.title}
                vote_average={movie.vote_average}
                poster_path={movie.poster_path}
              />
            ))}
          </ul>

          <Pagination
            currentPage={page}
            totalPages={totalPages}
            onPageChange={setPage}
          />
        </>
      )}
    </div>
  );
}
