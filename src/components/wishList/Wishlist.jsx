import { useContext } from "react";
import { WishlistContext } from "../../context/WishlistContextOnly";
import styles from "./Wishlist.module.css";
import MovieCard from "../movieCard/MovieCard";
import DeleteButtonWishlist from "../utils/deleteButtonWishlist/DeleteButtonWishlist";

export default function Wishlist() {
  const { wishlist } = useContext(WishlistContext);

  return (
    <div className={styles.container}>
      <h2 className={styles.header}>
        Ma Wishlist <span className={styles.count}>({wishlist.length})</span>
      </h2>

      {wishlist.length === 0 ? (
        <p className={styles.empty}>Aucun film dans la wishlist.</p>
      ) : (
        <ul className={styles.grid}>
          {wishlist.map((film) => (
            <li key={film.id} className={styles.cardWrapper}>
              <MovieCard
                id={film.id}
                poster_path={film.poster_path}
                title={film.title}
                vote_average={film.vote_average}
              />

              <DeleteButtonWishlist id={film.id} title={film.title} />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
