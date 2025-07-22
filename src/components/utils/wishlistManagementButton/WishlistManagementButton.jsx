import styles from "./WishlistManagementButton.module.css";
import DeleteButtonWishlist from "../deleteButtonWishlist/DeleteButtonWishlist";
import AddWishlistButton from "../addWishListButton/AddWishlistButton";

const WishlistManagementButton = ({ inWishlist, movie }) => {
  return (
    <div className={styles.wishlist}>
      {inWishlist ? (
        <DeleteButtonWishlist id={movie.id} title={movie.title} />
      ) : (
        <AddWishlistButton movie={movie} />
      )}
    </div>
  );
};

export default WishlistManagementButton;
