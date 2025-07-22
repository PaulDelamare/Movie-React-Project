import { useContext } from "react";
import { useParams } from "react-router";
import { WishlistContext } from "../../context/WishlistContextOnly";
import { useMovieDetail } from "../../hooks/useMovieDetail";
import { getImageUrl } from "../../services/movieApi";
import styles from "./MovieDetail.module.css";
import SimilarMovies from "../similarMovies/SimilarMovies";
import ActorList from "../actorList/ActorList";

export default function MovieDetail() {
  const { id } = useParams();
  const { wishlist, onAddToWishlist, removeFromWishlist } =
    useContext(WishlistContext);
  const { movie, actors, loading, error } = useMovieDetail(id);

  if (loading) return <div className={styles.loading}>Chargement…</div>;
  if (error) return <div className={styles.error}>Erreur de chargement</div>;
  if (!movie) return <div className={styles.error}>Aucun film trouvé.</div>;

  const inWishlist = wishlist.some((item) => item.id === movie.id);

  return (
    <section>
      <div className={styles.container}>
        <div className={styles.top}>
          {movie.poster_path && (
            <img
              src={getImageUrl(movie.poster_path)}
              alt={movie.title}
              className={styles.poster}
            />
          )}
          <div className={styles.info}>
            <h1 className={styles.title}>{movie.title}</h1>
            <p className={styles.meta}>
              <span className={styles.label}>Date de sortie :</span>{" "}
              {movie.release_date}
            </p>
            <p className={styles.meta}>
              <span className={styles.label}>Note moyenne :</span>{" "}
              {movie.vote_average}/10
            </p>
          </div>
        </div>

        <section>
          <h2 className={styles.sectionTitle}>Résumé</h2>
          <p className={styles.overview}>{movie.overview}</p>
        </section>

        <ActorList actors={actors} />

        <div className={styles.wishlist}>
          {inWishlist ? (
            <button
              className={styles.wishlistBtnDelete}
              onClick={() => removeFromWishlist(movie.id)}
            >
              <svg
                className={styles.trashIcon}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
              >
                <path d="M135.2 17.7L128 32 32 32C14.3 32 0 46.3 0 64S14.3 96 32 96l384 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-96 0-7.2-14.3C307.4 6.8 296.3 0 284.2 0L163.8 0c-12.1 0-23.2 6.8-28.6 17.7zM416 128L32 128 53.2 467c1.6 25.3 22.6 45 47.9 45l245.8 0c25.3 0 46.3-19.7 47.9-45L416 128z" />
              </svg>
              Retirer de la Wishlist
            </button>
          ) : (
            <button
              className={styles.wishlistBtn}
              onClick={() => onAddToWishlist(movie)}
            >
              Ajouter à la Wishlist
            </button>
          )}
        </div>
      </div>

      <SimilarMovies id={movie.id} />
    </section>
  );
}
