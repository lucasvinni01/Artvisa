import React from "react";
import styles from "./searchtag.module.scss";
import fotos from "../Galery/images.json";

export default function SearchTags({ tags, filtraFotos, setItens }) {
  return (
    <div className={styles.tags}>
      <p>Filtre por tags:</p>
      <ul className={styles.tags__lista}>
        {tags.map((tag) => {
          return (
            <li key={tag} onClick={() => filtraFotos(tag)}>
              {tag}
            </li>
          );
        })}
        <li onClick={() => setItens(fotos)}>Todas</li>
      </ul>
    </div>
  );
}
