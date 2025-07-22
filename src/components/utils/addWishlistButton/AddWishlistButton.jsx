import { useContext } from "react";
import styles from "./AddWishlistButton.module.css";
import { WishlistContext } from "../../../context/WishlistContextOnly";

const AddWishlistButton = ({ movie }) => {
  const { onAddToWishlist } = useContext(WishlistContext);

  return (
    <button
      className={styles.wishlistBtn}
      onClick={() => onAddToWishlist(movie)}
    >
      Ajouter à la Wishlist
    </button>
  );
};

export default AddWishlistButton;
