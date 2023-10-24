import './Author.scss'
const Author = (
    {
        name, 
        avataUrl='https://i.pravatar.cc/300', 
        avatarAlt='"Avatar de autor"'
    }) => {
    return (
        <div className="autor">
            <img src={avataUrl} alt={avatarAlt} />
            <span className="paragraph paragraph-xs font-bold">{name}</span>
        </div>
    );
};

export default Author;