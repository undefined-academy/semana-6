import classNames from "classnames";
import Tag from "../Tag";
import "./Card.scss";
import Author from "../Author/Author";
import Paragraph from "../Paragraph/Paragraph";
import Time from "../Time/Time";


const Card = ({unsplashId, unsplashAlt, tags, title, date, extract, author, readTime, isExtended = false, isReversed = false}) => {
    return (
        <article className={classNames("card", {"is-extended": isExtended, "is-reversed": isReversed})}>
            <section>
                <div className="card-content">
                        <header>
                            <img src={`https://source.unsplash.com/${unsplashId}`} alt={unsplashAlt} />
                            <div className="card-tags">
                                {tags?.map((tag, index) => ( 
                                    <Tag type={isExtended ? "secondary" : "primary"} key={index}>{tag}</Tag>
                                ))}  
                            </div>
                            <h2 className="heading heading-sm font-bold">{title}</h2>
                            <Time>{date}</Time>
                        </header>
                    <Paragraph>{extract}</Paragraph>
                </div>
            </section>
            <footer>
                <Author nome={author} />
                <Paragraph size="xs" isHelpText as="span">{readTime}</Paragraph>
            </footer>
        </article>
    );
};

export default Card;