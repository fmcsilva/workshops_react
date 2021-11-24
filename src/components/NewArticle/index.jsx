import React from "react";

import styles from "./styles.module.css";

const NewArticle = () => {
  return (
    <div className={styles.container}>
      <form className={styles.form}>
        <div>
          <p>Autor</p>
          <input required placeholder="Autor" type="text" />
        </div>
        <div>
          <p>Título</p>
          <input required placeholder="Título" type="text" />
        </div>
        <div className={styles.textarea}>
          <p>Conteúdo</p>
          <textarea required placeholder="Escreva o seu artigo..." cols={10} />
        </div>
        <input type="submit" value="Submeter" />
      </form>
    </div>
  );
};

export default NewArticle;
