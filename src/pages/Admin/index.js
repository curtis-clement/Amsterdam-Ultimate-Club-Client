import React, {useState, useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {fetchAllUsers} from '../../store/allusers/action';
import {selectAllUsers} from '../../store/allusers/selector';
import {addTeam} from '../../store/teams/action';
import style from '../../CSS Modules/admin.module.css';
import {Link} from 'react-router-dom';

export default function Admin() {
  const dispatch = useDispatch();
  const clubRoster = useSelector(selectAllUsers);
  const [team, setTeam] = useState('');

  useEffect(() => {
    dispatch(fetchAllUsers())
  }, [dispatch])

  const createTeam = (event) => {
    event.preventDefault()
    console.log('NEW TEAM', team);
    console.log('ADD TEAM', addTeam)
    dispatch(addTeam(team));
    setTeam('');
  } 

  return (
    <div>
      <div>
      <h1 className={style.header}>Administrative Panel</h1>
      </div>
      <hr className={style.line}/>

      <div className={style.roster}>
      <h3>Roster</h3>
        <div className={style.player}>
          {clubRoster.map(player => {
            return (
              <div>
              <div key={player.id} >
              <h5>{player.firstName} {player.lastName}</h5>
                <ul>
                  <li>Email: {player.email}</li>
                  <li>Phone: {player.phoneNumber}</li>
                  <li>Gender: {player.gender}</li>
                  <li>Rating: {player.selfRating}</li>
                </ul>
              </div>
              </div>
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
                <Link to={'/emaillist'}>
                  <button 
                   className={style.button}
                   type='submit'>
                     Submit
                  </button>
                </Link>
          </form>
    </div>
  )
}


