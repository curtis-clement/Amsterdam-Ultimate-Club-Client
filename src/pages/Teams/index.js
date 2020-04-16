import React, {useState} from 'react';
import {useSelector} from 'react-redux';


export default function Teams() {
  // const allTeams = useSelector(); selectAllTeams
  const [teams, setTeams] = useState('');

  return (
    <div>
      <h1>Current AUC Club Teams</h1>
      <div>Club Teams Page</div>
    </div>
  )
}
