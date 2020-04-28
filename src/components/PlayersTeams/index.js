import React from 'react'

export default function PlayersTeams(props) {
  console.log('PROPS', props)
  return (
    <div>
      {props.teams.map(team => {
        return(
          team.name
        )
      })}
    </div>
  )
}
