// El componente Player nos muestra la información de un
// Player usando el numero parseado del pathname de la URL.
// Si no encuentra un player con ese número, entonces un
// mensaje de "player not found" es mostrado.
import React from "react";
import { Link } from 'react-router-dom'
import PlayerAPI from '../../utils/PlayerAPI'

const Player = (props) => {
  const player = PlayerAPI.get(
    parseInt(props.match.params.number, 10)
  )
  if (!player) {
    return <div>Sorry, but the player was not found</div>
  }
  return (
    <div>
      <h1>{player.name} (#{player.number})</h1>
      <h2>Position: {player.position}</h2>
      <Link to='/roster'>Back</Link>
    </div>
  )
}

export default Player;