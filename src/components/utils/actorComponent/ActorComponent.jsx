import { getImageUrl } from "../../../services/movieApi";
import styles from "./ActorComponent.module.css";

const ActorComponent = ({ id, name, character, profile_path }) => (
  <li key={id} className={styles.actorItem}>
    <img
      src={getImageUrl(profile_path, "w45")}
      alt={name}
      className={styles.actorImage}
    />
    <div className={styles.actorInfo}>
      <span className={styles.actorName}>{name}</span>
      <span className={styles.actorChar}>{character}</span>
    </div>
  </li>
);

export default ActorComponent;
