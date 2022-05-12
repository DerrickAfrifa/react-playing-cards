import React from "react"

import TcN from "./components/TcN"
import TcB from "./components/TcB"
import FcN from "./components/FcN"
import FcB from "./components/FcB"

const selectDeck = (deckType, ref) => {
  if (deckType === "big-face") {return TcB}
  if (deckType === "big-face four-color") {return <FcB ref={ref} />}
  if (deckType === "four-color") {return FcN}

  return TcN
}

const Card = React.forwardRef((props, ref) => {
  console.log('ref in lib index', ref)
  const {deckType} = props
  const Component = selectDeck(deckType, ref)

  return <Component ref={ref} {...props} />
})

export default Card
