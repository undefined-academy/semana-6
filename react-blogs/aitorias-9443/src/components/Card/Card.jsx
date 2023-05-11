import './Card.css'
import { Tag } from "../Tag/Tag";
import { humanizeDate } from "../../assets/js/humanizeDate";

export function Card({ posts, activeFilter }) {

  const filteredPosts = activeFilter === 'all'
    ? posts // Si el filtro activo es 'all', mostramos todas las entradas
    : posts?.filter((post) => post.tags.some((tag) => tag.dataTag === activeFilter));

  return (
    <>
    {filteredPosts?.map((post) => (
    <article key={post.id} className="post">
      <div className="thumbnail">
        <a href="#">
            <img src={`/img/${post.img}`} alt={post.title} />
        </a>
      </div>
      <section>
        <div className="post-info">
          <div className="tags">
            {post.tags.map((tag) => (
              <Tag
                key={tag.dataTag}
                dataTag={tag.dataTag}
                name={tag.name}
              />
            ))}
          </div>
          <h2 className="post-title">{post.title}</h2>
          <p className="post-description">{post.description}</p>
        </div>
        <div className="post-footer">
          Por: <address className="author">{post.author}</address> | 
          <time dateTime={post.date}>{humanizeDate(post.date)}</time>
        </div>
      </section>
    </article>
    ))}
    </>
  )
}