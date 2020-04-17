import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {fetchAllTeams} from '../../store/teams/action';
import {selectAllTeams} from '../../store/teams/selector';
import Team from '../../components/Team';


export default function Teams() {
  const dispatch = useDispatch();
  const allTeams = useSelector(selectAllTeams);

  useEffect(() => {
    dispatch(fetchAllTeams())
  }, [dispatch])

  console.log('WHAT ARE TEAMS', allTeams);
  return (
    <div>
      <h1>Current AUC Club Teams</h1>
      <div>
        {allTeams.map(team => {
          return (
            <Team 
            key={team.id}
            id={team.id}
            name={team.name}
            />
          )
        })}
      </div>
    </div>
  )
}
