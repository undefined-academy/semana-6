import './Card.css'
import { humanizeDate } from "../../assets/js/humanizeDate";

export function Card({ posts }) {

  return (
    <>
    {posts?.map((post) => (
    <div key={post.id} className="post">
      <div className="thumbnail">
        <a href="#">
            <img src={`src/assets/img/${post.img}`} alt={post.title} />
        </a>
      </div>
      <div className="post-info">
        <div className="tags">
          {post.tags.map((tag) => (
            <span key={tag.dataTag} className="tag" data-tag={tag.dataTag}>
              {tag.name}
            </span>
          ))}
        </div>
        <h2 className="post-title">{post.title}</h2>
        <p className="post-description">{post.description}</p>
      </div>
      <div className="post-footer">
        Por: <address className="author">{post.author}</address> | 
        <time dateTime={post.date}>{humanizeDate(post.date)}</time>
      </div>
    </div>
    ))}
    </>
  )
}