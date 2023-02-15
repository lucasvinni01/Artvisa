import React from "react";
import SearchTag from "../SearchTag";
import styles from "./galery.module.scss";
import fotos from "./images.json";
import Cards from "./Cards";
import { useState } from "react";

export default function Galery() {
  const [itens, setItens] = useState(fotos);
  const tags = [...new Set(fotos.map((valor) => valor.tag))];

  const filtraFotos = (tag) => {
    const novasFotos = fotos.filter((foto) => {
      return foto.tag === tag;
    });

    setItens(novasFotos);
  };

  return (
    <section className={styles.galeria}>
      <h2>Explore Novos Mundos</h2>
      <SearchTag tags={tags} filtraFotos={filtraFotos} setItens={setItens} />
      <Cards itens={itens} styles={styles} />
    </section>
  );
}