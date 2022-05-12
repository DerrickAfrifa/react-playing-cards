import React from "react"

import b from "../images/back.svg"

const Card = React.forwardRef((props, ref) => {
  const {card, front = true, back, Component, height, style = {}, className = "", onClick} = props;
  style.height = height;

  if (back) {
    return (
      <img ref={ref} src={b} className={`react-playing-card react-playing-card__back ${className}`} alt="card-back" style={style} onClick={onClick} />
    )
  }

  if (front) {
    return (
      <img ref={ref} src={card} className={`react-playing-card react-playing-card__back ${className}`} alt={card} style={style} onClick={onClick} />
    )
  }
})

export default Card
