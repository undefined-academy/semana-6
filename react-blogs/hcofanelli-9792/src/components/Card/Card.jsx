import React from 'react'
import "./Card.scss"


export const Card = ({unsplashId, title, date,text}) => {
  return (
    <div>
          <img src={`https://source.unsplash.com/${unsplashId}`}/>
          <span id="date">{date}</span>
          <h1>{title}</h1>
          <p>{text}</p>
        </div>
  )
}
