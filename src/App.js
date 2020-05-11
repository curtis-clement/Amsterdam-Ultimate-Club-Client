import React, { useEffect } from "react";
import "./App.css";

import { Switch, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import Loading from "./components/Loading";
import MessageBox from "./components/MessageBox";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import WhatIsUltimate from './pages/WhatIsUltimate';
import CityLeague from './pages/CityLeague';
import Teams from './pages/Teams';
import Admin from './pages/Admin';
import Gear from './pages/Gear';

import { useDispatch, useSelector } from "react-redux";
import { selectAppLoading } from "./store/appState/selectors";
import { getUserWithStoredToken } from "./store/user/actions";

import style from './CSS Modules/navbar.module.css';

function App() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectAppLoading);

  useEffect(() => {
    dispatch(getUserWithStoredToken());
  }, [dispatch]);

  return (
    <div className="App">
      <Navigation />
      <MessageBox />
      {isLoading ? <Loading /> : null}
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/aboutus" component={AboutUs} />
        <Route path="/whatisultimate" component={WhatIsUltimate} />
        <Route path="/cityleague" component={CityLeague} />
        <Route path='/gear' component={Gear} />
        <Route path="/teams" component={Teams} />
        <Route path="/admin" component={Admin} />
        <Route path="/signup" component={SignUp} />
        <Route path="/login" component={Login} />
        <Route path='/emaillist' component={() => { 
          window.location.href = 'https://mailchi.mp/490e1c05228d/aucmaillistsignup'; 
          return null;
        }}/>
      </Switch>
    </div>
  );
}

export default App;
