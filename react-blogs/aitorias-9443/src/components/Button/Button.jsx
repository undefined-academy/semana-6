import './Button.css'

export function Button({ type, classes, isActive, id, value, dataFilter, onClick, text }) {

  return (
    <button
      type={type}
      className={`${classes?.join(' ')} ${isActive ? 'active' : ''}`}
      id={id}
      value={value}
      data-filter={dataFilter}
      onClick={onClick}
    >
      {text}
    </button>
  )
}