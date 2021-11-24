import React from "react";

import styles from "./styles.module.css";

const Article = ({ author, title, content }) => {
  return (
    <div className={styles.container}>
      <div>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.content}>{content}</p>
        <p className={styles.author}>
          <small>by {author}</small>
        </p>
      </div>
    </div>
  );
};

export default Article;
