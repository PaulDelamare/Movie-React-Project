import styles from "./Pagination.module.css";

export default function Pagination({ currentPage, totalPages, onPageChange }) {
  return (
    <div className={styles.container}>
      <button
        onClick={() => onPageChange((p) => Math.max(p - 1, 1))}
        disabled={currentPage === 1}
        className={styles.button}
      >
        Précédent
      </button>

      <span className={styles.info}>
        Page {currentPage} / {totalPages}
      </span>

      <button
        onClick={() => onPageChange((p) => Math.min(p + 1, totalPages))}
        disabled={currentPage >= totalPages}
        className={styles.button}
      >
        Suivant
      </button>
    </div>
  );
}
