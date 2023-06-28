// import "./Tab.scss"
import classnames from "classnames";
import Link from "../Link/Link";

const Tab = ({ children, href = "#", isActive,  onClick }) => {
    return (
        <li 
            className={classnames({
                "is-active-Tab": isActive,
            })}
        >
            <Link href={href}  onClick={onClick}>{children}</Link>
        </li>
    );
};

export default Tab;