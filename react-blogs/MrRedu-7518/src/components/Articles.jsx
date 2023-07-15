import Card from "./Card";
import styles from "./Articles.module.css";

import cards from "../data/cards.json";

const Articles = () => {
  return (
    <>
      <main className={styles["container-cards"]}>
        {cards.map((article) => {
          return <Card key={article.id} {...article} />;
        })}
      </main>
    </>
  );
};

export default Articles;
