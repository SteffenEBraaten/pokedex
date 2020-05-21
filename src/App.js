import React from 'react';
import {HashRouter as Router, Route, Switch} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';

import NavBar from './components/layout/NavBar';
import Dashboard from './components/layout/Dashboard'

export default function App() {
  return (
    <Router>
      <div className="App">
          <NavBar />
          <div className="container">
              <Switch>
                <Dashboard />
              </Switch>
          </div>
      </div>
    </Router>
  );
}
