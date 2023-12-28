function Card(props) {
    const { title, children } = props
    return (
      <div className="card">
        <h3 className="card-title">{title}</h3>
        <p className="card-content">{children}</p>
      </div>
    )
  }
  
  export default Card