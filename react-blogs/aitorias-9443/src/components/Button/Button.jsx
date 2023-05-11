import './Button.css'

export function Button({ text, type, classes, isActive, id, value, dataFilter, disabled, onClick }) {

  return (
    <button
      type={type}
      className={`${classes} ${isActive ? 'active' : ''}`}
      id={id}
      value={value}
      data-filter={dataFilter}
      disabled={disabled}
      onClick={onClick}
    >
      {text}
    </button>
  )
}