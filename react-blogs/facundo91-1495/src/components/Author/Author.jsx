import "./Author.scss";

const Author = ({nome, avatarUrl = "imagenes/logos/perfil-2.jpg", avatarAlt = "Avatar de un author"}) => {
    return (
        <div className="author">
            <img src={avatarUrl} alt={avatarAlt} />
            <span className="paragraph paragraph-xs font-bold">{nome}</span>
        </div>
    );
};

export default Author;