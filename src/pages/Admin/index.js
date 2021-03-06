import React, {useState, useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {fetchAllUsers} from '../../store/allusers/action';
import {fetchAllTeams} from '../../store/teams/action';
import {selectAllUsers} from '../../store/allusers/selector';
import {selectAllTeams} from '../../store/teams/selector';
import {addTeam} from '../../store/teams/action';
import {updatePlayerTeam} from '../../store/admin/action';
import style from '../../CSS Modules/admin.module.css';
import PlayersTeams from '../../components/PlayersTeams';

export default function Admin() {
  const dispatch = useDispatch();
  const clubRoster = useSelector(selectAllUsers);
  const clubTeams = useSelector(selectAllTeams);
  const [team, setTeam] = useState('');
  const [player, setPlayer] = useState('');

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
    dispatch(updatePlayerTeam(team, player));

  }

  return (
    <main className={style.body}>
      <header>
      <h1 className={style.header}>Administrative Panel</h1>
      <hr className={style.line}/>
      </header>

      <section className={style.roster}>
      <h3 className={style.h3}>Roster</h3>
        <div>
          {clubRoster.map(player => {
            return (
              <form className={style.player} key={player.id} onSubmit={addPlayerTeam}>
              <div className={style.playerbox}>
              <h5 className={style.playername}>{player.firstName} {player.lastName}</h5>
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
      </section>
        
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
    </main>
  )
}


