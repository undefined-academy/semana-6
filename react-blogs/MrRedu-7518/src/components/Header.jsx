import styles from "./Header.module.css";

const Header = () => {
  return (
    <>
      <nav className={styles["nav-bar"]}>
        <button>
          <span className={styles["material-icons"]}>menu</span>
        </button>
        <ul>
          <li>
            <a href="">Todos</a>
          </li>
          <li>
            <a href="">HTML</a>
          </li>
          <li>
            <a href="">CSS</a>
          </li>
          <li>
            <a href="">JavaScript</a>
          </li>
          <li>
            <a href="">
              Web <span>Components</span>
            </a>
          </li>
        </ul>

        <div className={styles["search-bar"]}>
          <div className={styles["actions"]}>
            <button>
              <span className="material-icons">search</span>
            </button>
          </div>
          <input type="text" placeholder="Buscar" />
        </div>
      </nav>
    </>
  );
};

export default Header;
