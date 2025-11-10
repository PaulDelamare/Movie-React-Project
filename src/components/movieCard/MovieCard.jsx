import { Link } from "react-router";
import styles from "./MovieCard.module.css";

const IMAGE_BASE = "https://image.tmdb.org/t/p/w300";

const MovieCard = ({ title, vote_average, id, poster_path }) => {
  return (
    <div className={styles.card}>
      <img
        src={
          poster_path
            ? IMAGE_BASE + poster_path
            : "https://via.placeholder.com/300x450?text=No+Image"
        }
        alt={title}
        className={styles.poster}
      />

      <h2 className={styles.title}>{title}</h2>
      <p className={styles.rating}>⭐ {vote_average?.toFixed(1)}</p>

      <Link to={`/movie/${id}`} className={styles.detailsLink}>
        Voir les détails
      </Link>
    </div>
  );
};

export default MovieCard;
