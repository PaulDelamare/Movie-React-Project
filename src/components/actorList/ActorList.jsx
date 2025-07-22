import styles from "./ActorList.module.css";
import { getImageUrl } from "../../services/movieApi";

export default function ActorList({ actors }) {
  if (!actors.length) return null;
  return (
    <section>
      <h2 className={styles.title}>Acteurs principaux</h2>
      <ul className={styles.actorList}>
        {actors.map((actor) => (
          <li key={actor.id} className={styles.actorItem}>

            <img
              src={getImageUrl(actor.profile_path, "w45")}
              alt={actor.name}
              className={styles.actorImage}
            />

            <div className={styles.actorInfo}>
              <span className={styles.actorName}>{actor.name}</span>
              <span className={styles.actorChar}>{actor.character}</span>
            </div>

          </li>
        ))}
      </ul>
    </section>
  );
}
