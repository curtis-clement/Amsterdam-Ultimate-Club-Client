import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {fetchAllUsers} from '../../store/allusers/action';
import {selectAllUsers} from '../../store/allusers/selector';
import style from '../../CSS Modules/admin.module.css';

export default function Admin() {
  const dispatch = useDispatch();
  const clubRoster = useSelector(selectAllUsers);

  useEffect(() => {
    dispatch(fetchAllUsers())
  }, [dispatch])

  console.log('WHAT IS THE ROSTER', clubRoster);

  return (
    <div>
      <div>
      <h1 className={style.header}>Administrative Panel</h1>
      </div>
      <hr className={style.line}/>
      <h3>Roster</h3>
        <div>
          {clubRoster.map(player => {
            return (
              <div>
              <h5>{player.firstName} {player.lastName}</h5>
                <ul>
                  <li>Email: {player.email}</li>
                  <li>Phone: {player.phoneNumber}</li>
                  <li>Gender: {player.gender}</li>
                  <li>Rating: {player.selfRating}</li>
                </ul>
              </div>
            )
          })}
        </div>
    </div>
  )
}
