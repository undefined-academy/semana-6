import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <>
      <footer className={styles["footer-container"]}>
        <ul className={styles["footer-list"]}>
          <li className={styles["footer-item-list"]}>
            <a href="https://github.com/MrRedu">GitHub</a>
          </li>
        </ul>
      </footer>
    </>
  );
};

export default Footer;
