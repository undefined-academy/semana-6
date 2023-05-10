import './Tags.css'

const Tags = (props) => {
  return (
    <div className="tags">
      {props?.list?.map((tag, index) => (
        <span key={index}>#{tag}</span>
      ))}
    </div>
  )
}
export default Tags
