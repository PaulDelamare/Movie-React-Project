import styles from "./ListFilterCategory.module.css";
import FilterCategory from "../filterCategory/FilterCategory";

const ListFilterCategory = ({
  categories,
  selectedCat,
  setSelectedCat,
  filter,
}) => {
  return (
    <nav className={styles.categories}>
      {Object.entries(categories).map(([key, label]) => (
        <FilterCategory
          key={key}
          keyProp={key}
          label={label}
          selectedCat={selectedCat}
          setSelectedCat={setSelectedCat}
          disabled={filter.trim().length > 0}
        />
      ))}
    </nav>
  );
};

export default ListFilterCategory;
