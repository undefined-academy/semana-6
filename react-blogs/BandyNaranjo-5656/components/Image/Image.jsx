import "./Image.scss"
import classnames from "classnames";

const Image = ({ type, src, alt }) => {
    return (
    <>
        <img src={src} alt={alt} className={classnames({
                [`${type}`]: type,
            })}/>
    </>
    );
}

export default Image;