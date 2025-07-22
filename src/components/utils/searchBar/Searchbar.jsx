import styles from "./SearchBar.module.css";

export default function SearchBar({ value, onChange, placeholder }) {
  return (
    <input
      type="text"
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className={styles.search}
    />
  );
}
