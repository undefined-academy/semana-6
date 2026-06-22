import "./Author.scss";

const Author = ({
  name,
  avatarUrl = "/images/logos/avatar.svg",
  avatarAlt = "Avatar de un autor",
}) => {
  return (
    <div className="author">
      <img src={avatarUrl} alt={avatarAlt} />
      <span className="paragraph paragraph-xs font-bold">{name}</span>
    </div>
  );
};

export default Author;
