import React, {useState, useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {fetchAllTeams} from '../../store/teams/action';
import {selectAllTeams} from '../../store/teams/selector';
import {deleteTeamSuccess} from '../../store/admin/action';
import Team from '../../components/Team';
import style from '../../CSS Modules/teams.module.css';


export default function Teams() {
  const dispatch = useDispatch();
  const clubTeams = useSelector(selectAllTeams);
  // const [teams, setTeams] = useState();

  useEffect(() => {
    dispatch(fetchAllTeams())
  }, [dispatch])

  const onDelete = id => {
    dispatch(deleteTeamSuccess(id))
    // setTeams();
  }

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
              onClick={() => onDelete(team.id)}
              >Delete</button>
            </div>
          )
        })}
      </div>
    </div>
  )
}
