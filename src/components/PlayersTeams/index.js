import React from 'react'
import style from '../../CSS Modules/admin.module.css';

export default function PlayersTeams(props) {
  
  return (
    <div>
      {props.teams.map(team => {
        return(
          <ul className={style.ul}>
            <li>{team.name}</li>
          </ul>
        )
      })}
    </div>
  )
}
