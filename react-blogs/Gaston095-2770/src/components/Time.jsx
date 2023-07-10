import humanize from "../../utils/humanize"

function Time({children}) {
    return (
        <span className="date" id="date2">
            <time dateTime={children}>{humanize(children)}</time>
        </span>
    )
}

export default Time;