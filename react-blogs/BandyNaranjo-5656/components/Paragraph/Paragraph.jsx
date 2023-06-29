import "./Paragraph.scss";
import classnames from "classnames";

const Paragraph = ({ children, color='white', size="sm", font="regular" }) => {
    return (
        <>
            <p className={classnames( {
                [`color-${color}`]: color,
                [`paragraph-${size}`]: size,
                [`font-${font}`]: font,
            })}>
                {children}
            </p>
        </>
    );
};

export default Paragraph;


