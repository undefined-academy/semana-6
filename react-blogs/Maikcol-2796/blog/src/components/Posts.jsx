import PropTypes from "prop-types";
import clay from "../assets/clay.jpg";
import "./Posts.css";
export function Posts({ entries }) {
  const orderEntries = entries?.toSorted((a, b) => {
    if (a.principal && b.principal) {
      return a.id - b.id;
    } else if (a.principal) {
      return -1;
    } else {
      return 1;
    }
  });
  return (
    <section className="posts">
      {orderEntries?.map((entry) => {
        return (
          <article key={entry.id} className={entry.principal && "principal"}>
            <div className="article-head">
              <h2>{entry.title}</h2>
              <img src={clay} alt="" />
            </div>
            <div className="article-text">
              <p>{entry.body}</p>
              <div className="article-footer">
                <time dateTime="2023-03-31"></time>
                <a className="article-link" href="#">
                  Leer más
                </a>
              </div>
            </div>
          </article>
        );
      })}
    </section>
  );
}
Posts.propTypes = {
  entries: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.object),
    PropTypes.oneOf([null, undefined]),
  ]),
};
