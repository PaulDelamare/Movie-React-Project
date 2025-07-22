import styles from "./FilterCategory.module.css";

const FilterCategory = ({ keyProp, label, selectedCat, setSelectedCat }) => {
  return (
    <button
      key={keyProp}
      onClick={() => setSelectedCat(keyProp)}
      className={
        keyProp === selectedCat
          ? `${styles.catBtn} ${styles.active}`
          : styles.catBtn
      }
    >
      {label}
    </button>
  );
};

export default FilterCategory;
