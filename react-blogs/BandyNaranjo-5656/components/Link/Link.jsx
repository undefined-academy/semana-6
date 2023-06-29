import "./Link.scss"
import classnames from "classnames";

const Link = ({ children, href, target='_self', size='sm', onClick}) => {
    return (
    <>
        <a href={href} className={classnames("font-bold color-white", {
                [[`size-${size}`]]: size
            })}
        target={target} onClick={() => {
            onClick(children)
         }}>{children}</a>
    </>
    );
}

export default Link;