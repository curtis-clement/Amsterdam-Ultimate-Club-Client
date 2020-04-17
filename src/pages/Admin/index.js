import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {fetchAllUsers} from '../../store/allusers/action';
import {selectAllUsers} from '../../store/allusers/selector';

export default function Admin() {
  const dispatch = useDispatch();
  const clubRoster = useSelector(selectAllUsers);

  useEffect(() => {
    dispatch(fetchAllUsers())
  }, [dispatch])

  console.log('WHAT IS THE ROSTER', clubRoster);

  return (
    <div>
      <h1>Administrative Panel</h1>
      <h3>Roster</h3>
        <div>
          
        </div>
    </div>
  )
}
