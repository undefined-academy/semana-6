import "./Heading.scss"
import classnames from "classnames";

const Heading = ({ children, color, size, align="left" }) => {
    return (
    <>
        <h4 className={classnames('font-bold', {
                [`color-${color}`]: color,
                [`heading-${size}`]: size,
                [`heading-align-${align}`]: align,
            })}>{children}</h4>
    </>
    );
}

export default Heading;