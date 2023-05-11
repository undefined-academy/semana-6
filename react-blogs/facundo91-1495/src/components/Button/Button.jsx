import classNames from "classnames";
import "./Button.scss";

function Button({ children, type = "primary", onClick}) {
    return (
        <button onClick={onClick} className={classNames("button", {
            [`button-${type}`]: type,
        })}
        >
         {children}
        </button>
    );
}

export default Button;