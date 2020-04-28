import React, {useState, useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {fetchAllUsers} from '../../store/allusers/action';
import {fetchAllTeams} from '../../store/teams/action';
import {selectAllUsers} from '../../store/allusers/selector';
import {selectAllTeams} from '../../store/teams/selector';
import {addTeam} from '../../store/teams/action';
import style from '../../CSS Modules/admin.module.css';
import PlayersTeams from '../../components/PlayersTeams';

export default function Admin() {
  const dispatch = useDispatch();
  const clubRoster = useSelector(selectAllUsers);
  const clubTeams = useSelector(selectAllTeams);
  const [team, setTeam] = useState('');
  const [player, setPlayer] = useState('');

  console.log('ALL TEAMS', clubTeams)
  console.log('ALL USERS', clubRoster)

  useEffect(() => {
    dispatch(fetchAllUsers())
  }, [dispatch])

  useEffect(() => {
    dispatch(fetchAllTeams())
  }, [dispatch])

  const createTeam = (event) => {
    event.preventDefault()
    dispatch(addTeam(team));
    setTeam('');
  } 

  const addPlayerTeam = (event) => {
    event.preventDefault();
    console.log('ADDPLAYER_TEAM', team)
    console.log('ADDTEAM_PLAYER', player)
  }

  return (
    <div className={style.body}>
      <div>
      <h1 className={style.header}>Administrative Panel</h1>
      </div>
      <hr className={style.line}/>

      <div className={style.roster}>
      <h3>Roster</h3>
        <div className={style.player}>
          {clubRoster.map(player => {
            return (
              <form key={player.id} onSubmit={addPlayerTeam}>
              <div>
              <h5>{player.firstName} {player.lastName}</h5>
                <ul className={style.ul}>
                  <li>Email: {player.email}</li>
                  <li>Phone: {player.phoneNumber}</li>
                  <li>Gender: {player.gender}</li>
                  <li>Rating: {player.selfRating}</li>
                  <li>Current Teams: 
                    <PlayersTeams 
                    teams={player.teams}
                    />
                  </li>
                </ul>

                <div>
                  <select
                  onChange={event => {
                  setTeam(event.target.value)
                  setPlayer(player.id)} 
                  }
                  >
                    <option>Select Team</option>
                    {clubTeams.map(team => {
                      return (
                        <option 
                        key={team.id}
                        value={team.id}
                        >
                          {team.name}
                        </option>
                      )
                    })}
                  </select>
                  <button 
                  className={style.playerbutton}  
                  type='submit'
                  >
                    Add
                  </button>

                </div>
              </div>
              </form>
            )
          })}
        </div>
      </div>
        
          <form className={style.addteam} onSubmit={createTeam}>
               <h3>Add Team</h3>
                <div className={style.form} onSubmit={createTeam}>
                    <input 
                    className={style.input}
                    type='text'
                    value={team}
                    onChange={event => setTeam(event.target.value)}
                    required
                     />
                    <label className={style.label}>
                      <span className={style.contentname}>Team Name</span>
                    </label>
                 </div>
                <button 
                  className={style.button}
                  type='submit'>
                    Submit
                </button>
          </form>
    </div>
  )
}


