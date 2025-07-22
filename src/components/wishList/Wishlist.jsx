import { useContext } from "react";
import { WishlistContext } from "../../context/WishlistContextOnly";
import styles from "./Wishlist.module.css";

const Wishlist = () => {
  const { wishlist, removeFromWishlist } = useContext(WishlistContext);

  return (
    <div className={styles.container}>
      <h2 className={styles.header}>
        Ma Wishlist <span className={styles.count}>({wishlist.length})</span>
      </h2>

      {wishlist.length === 0 ? (
        <p className={styles.empty}>Aucun film dans la wishlist.</p>
      ) : (
        <ul className={styles.list}>
          {wishlist.map((film) => (
            <li key={film.id} className={styles.item}>
              <span className={styles.title}>{film.title}</span>
              <button
                className={styles.removeBtn}
                onClick={() => removeFromWishlist(film.id)}
              >
                Supprimer
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Wishlist;
