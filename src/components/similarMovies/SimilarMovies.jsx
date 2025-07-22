import styles from "./SimilarMovies.module.css";
import MovieCard from "../movieCard/MovieCard";
import { useSimilarMovies } from "../../hooks/useSimilarMovies";

export default function SimilarMovies({ id }) {

  const { movies, loading, error } = useSimilarMovies(id);

  if (loading) return <p className={styles.loading}>Chargement…</p>;

  if (error) return <p className={styles.error}>Erreur de chargement</p>;

  if (movies.length === 0)
    return <p className={styles.noSimilar}>Aucun film similaire trouvé.</p>;

  return (
    <section>
      <h2 className={styles.sectionTitle}>Films similaires</h2>
      <ul className={styles.similarList}>
        {movies.map((movie) => (
          <li key={movie.id} className={styles.similarCard}>
            <MovieCard {...movie} />
          </li>
        ))}
      </ul>
    </section>
  );
}
