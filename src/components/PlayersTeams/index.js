import React from 'react'

export default function PlayersTeams(props) {

  return (
    <div>
      My Teams: {props.teams.map(team => {
        return(
          team.name
        )
      })}
    </div>
  )
}
