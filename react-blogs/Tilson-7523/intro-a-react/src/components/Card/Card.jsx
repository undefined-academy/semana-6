import classNames  from "classnames"; 
import Tag from "../Tag";
import "./Card.scss";
import Author from "../Author/Author";
import Paragraph from "../Paragraph/Paragraph";
import Time from "../Time/Time";
  

const Card = ({ unsplashID, 
    unsplashAlt, tags, title, extract, date, author, 
    readtime,
    isExtended = false,
    isReversed = false
    }
) => {
    return (
        <article className= {classNames("card", {
            "is-extended": isExtended,
            "is-reversed": isReversed
        })}
        >
            <img src="https://images.unsplash.com/photo-1697082390841-bbe568972ac8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80" alt={unsplashAlt} />
            <section>
                <div className="card-content">
                    <header>
                        <div className="tags">
                            {
                            tags?.map((tag, index)=> {
                                return <Tag 
                                type= {isExtended ? 'secondary' : 'primary'}
                                key={index}>{tag}</Tag>
                            })}
                        </div>
                        <h2 className="heading heading-sm font-bold">{title}</h2>
                        <Time>{date}</Time>
                    </header>
                    <Paragraph>{extract}</Paragraph>
                </div>

                <footer>
                    <Author name={author}></Author>
                    <Paragraph 
                    size="xs" 
                    isHelpText={true}
                    as="span"
                    >
                        {readtime}</Paragraph>
                </footer>
            </section>
        </article>
    );
};

export default Card;
