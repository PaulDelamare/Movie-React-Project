import styles from "./ActorList.module.css";
import ActorComponent from "../utils/actorComponent/ActorComponent";

export default function ActorList({ actors }) {
  if (!actors.length) return null;
  return (
    <section>
      <h2 className={styles.title}>Acteurs principaux</h2>
      <ul className={styles.actorList}>
        {actors.map((actor) => (
          <ActorComponent
            key={actor.id}
            name={actor.name}
            character={actor.character}
            profile_path={actor.profile_path}
          />
        ))}
      </ul>
    </section>
  );
}
