import React, {useState} from 'react';
import './App.css';
import Chat from './Chat';
import SideBar from './SideBar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from './Login';
import {useStateValue} from './StateProvider'



function App() {
  const [{ user }, dispatch] = useStateValue();


  return (
    // BEN Naming convention
    <div className="app">
        {
          !user ? (
            <Login />
          ) : 
        (
        <div className="app__body">

          <Router>
            <SideBar />

            <Switch>
              <Route path="/rooms/:roomId">

                <Chat />
              </Route>

              <Route path="/">

                <Chat />
              </Route>
            </Switch>
          </Router>
        </div>
        )
        }
    </div>
  );
}

export default App;
