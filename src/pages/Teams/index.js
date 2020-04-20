import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {fetchAllTeams} from '../../store/teams/action';
import {selectAllTeams} from '../../store/teams/selector';
import Team from '../../components/Team';
import style from '../../CSS Modules/teams.module.css';


export default function Teams() {
  const dispatch = useDispatch();
  const clubTeams = useSelector(selectAllTeams);

  useEffect(() => {
    dispatch(fetchAllTeams())
  }, [dispatch])

  const onDelete = name => {
    console.log('TEAM DELETED', name)
  }

  console.log('WHAT ARE TEAMS', clubTeams);
  return (
    <div>
      <div>
      <h1 className={style.header}>Current AUC Club Teams</h1>
      </div>
      <hr className={style.line}/>
      <div>
         {clubTeams.map(team => {
          return (
            <div key={team.id}>
              <Team 
              id={team.id}
              name={team.name}
              />

              <button
              className={style.button}
              onClick={() => onDelete(team.name)}
              >Delete</button>
            </div>
          )
        })}
      </div>
    </div>
  )
}
