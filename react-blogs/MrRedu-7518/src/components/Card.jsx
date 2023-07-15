import styles from "./Card.module.css";

const Card = ({ id, unsplashId, titleCard, textCard }) => {
  return (
    <>
      <div className={styles["card-container"]}>
        <img
          src={`https://source.unsplash.com/${unsplashId}`}
          alt="Imagen de ejemplo"
          className={styles['image-card']}
          width={150}
        />

        <div className={styles["content"]}>
          <h2 className={styles["title-card"]}>{titleCard}</h2>
          <p className={styles["text-card"]}>{textCard}</p>
        </div>
        <footer>
          <time id="fecha" dateTime="2021-09-30T12:00:00Z" format="dd-MM-yyyy">
            2021-09-30
          </time>
        </footer>
      </div>
    </>
  );
};

export default Card;
