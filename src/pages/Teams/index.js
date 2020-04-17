import React, {useState, useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {fetchAllTeams} from '../../store/teams/action';
import {selectAllTeams} from '../../store/teams/selector';


export default function Teams() {
  const dispatch = useDispatch();
  const allTeams = useSelector(selectAllTeams); 
  const [teams, setTeams] = useState('');

  useEffect(() => {
    dispatch(fetchAllTeams())
  }, [dispatch])

  console.log('WHAT ARE TEAMS', allTeams);
  return (
    <div>
      <h1>Current AUC Club Teams</h1>
      <div>Club Teams Page</div>
    </div>
  )
}
