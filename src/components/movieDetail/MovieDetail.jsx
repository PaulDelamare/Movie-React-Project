import { useContext } from "react";
import { useParams } from "react-router";
import { WishlistContext } from "../../context/WishlistContextOnly";
import { useMovieDetail } from "../../hooks/useMovieDetail";
import { getImageUrl } from "../../services/movieApi";
import styles from "./MovieDetail.module.css";
import SimilarMovies from "../similarMovies/SimilarMovies";
import ActorList from "../actorList/ActorList";
import WishlistManagementButton from "../utils/wishListManagementButton/WishlistManagementButton";

export default function MovieDetail() {
  const { id } = useParams();
  const { wishlist } = useContext(WishlistContext);

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

        <WishlistManagementButton inWishlist={inWishlist} movie={movie} />
      </div>

      <SimilarMovies id={movie.id} />
    </section>
  );
}
