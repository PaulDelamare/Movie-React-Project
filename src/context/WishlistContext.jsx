import { useState, useEffect } from "react";
import { WishlistContext } from "./WishlistContextOnly";

export const WishlistProvider = ({ children }) => {
  const [wishlist, setWishlist] = useState(() => {
    const stored = localStorage.getItem("wishlist");
    return stored ? JSON.parse(stored) : [];
  });

  const [toast, setToast] = useState(null);

  useEffect(() => {
    localStorage.setItem("wishlist", JSON.stringify(wishlist));
  }, [wishlist]);

  useEffect(() => {
    if (toast) {
      const timer = setTimeout(() => setToast(null), 2000);
      return () => clearTimeout(timer);
    }
  }, [toast]);

  const onAddToWishlist = (movie) => {
    setWishlist((prev) => {
      if (!prev.find((item) => item.id === movie.id)) {
        setToast(`Ajouté à la wishlist: ${movie.title || movie.name}`);
        return [...prev, movie];
      }
      return prev;
    });
  };

  const removeFromWishlist = (movieId) => {
    setWishlist((prev) => prev.filter((item) => item.id !== movieId));
  };

  const clearWishlist = () => setWishlist([]);

  return (
    <WishlistContext.Provider
      value={{ wishlist, onAddToWishlist, removeFromWishlist, clearWishlist }}
    >
      {children}
      {toast && (
        <div
          style={{
            position: "fixed",
            bottom: 30,
            left: "50%",
            transform: "translateX(-50%)",
            color: "#fff",
            padding: "10px 20px",
            borderRadius: 8,
            zIndex: 9999,
            backgroundColor: "green",
            minWidth:"250px"
          }}
        >
          {toast}
        </div>
      )}
    </WishlistContext.Provider>
  );
};
