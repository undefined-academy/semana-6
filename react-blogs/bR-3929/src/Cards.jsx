import React from "react";

const Card = ({ link, image, description, className }) => {
  return (
    <div className="post">
      <a href={link} id={className}>
        <img src={image}></img>
      </a>
      <p>{description}</p>
    </div>
  );
};

export default Card;
