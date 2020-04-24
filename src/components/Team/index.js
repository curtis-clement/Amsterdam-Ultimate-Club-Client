import React from 'react'
import style from "../../CSS Modules/ateam.module.css";

export default function Team(props) {
  return (
    <div>
      <h2>{props.name}</h2>
      {props.players.map(player => {
        return (
          <p key={player.id}>
            {player.firstName} {player.lastName}
          </p>
        )
        }) 
      }
    </div>
  )
}
