import React from 'react'
import style from "../../CSS Modules/teams.module.css";

export default function Team(props) {
  return (
    <div>
      {props.name}
      {props.players.map(player => {
        return (
          <p>{player.firstName} {player.lastName}</p>
        )
      }) }
    </div>
  )
}
