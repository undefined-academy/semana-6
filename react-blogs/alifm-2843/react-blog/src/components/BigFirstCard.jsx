import { humanize } from "../assets/scripts/humanize";

function BigFirstCard() {
  return (
    <>
      <section id="beach" className="card">
        <img src="https://source.unsplash.com/fvXHYhF7rvI" alt="beach" />
        <h1>Beach destinations 🌊</h1>
        <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi
          tenetur laboriosam temporibus quibusdam impedit inventore enim? Alias
          placeat dolorum amet sint. Odit fugit sed adipisci. Molestiae
          distinctio vel harum enim?
        </p>
        <span>
          Posted: March 31<time dateTime="2023-03-31"  className="dates"></time>
        </span>
      </section>
    </>
  );
}

export default BigFirstCard;
