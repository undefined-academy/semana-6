import "./Card.scss"
import Paragraph from "/components/Paragraph/Paragraph";
import Image from "/components/Image/Image";
import Heading from "/components/Heading/Heading";

const Card = ({ unsplashId, unsplashAlt, title, paragraph }) => {
    return (
    <>
        <div className="hobby">
            <Image type='card' src={`/images/${unsplashId}`} alt={unsplashAlt}/>
            <div>
            <Heading color="white" size="sm" align="center">{title}</Heading>
            <Paragraph color='dark-grey'>{paragraph}</Paragraph>
            </div>
            
        </div>
    </>
    );
}

export default Card;