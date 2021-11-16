import './App.css';
import React from 'react'
import Nav from './Nav.js';
import Hero from './Hero.js';
import Areas from './Areas.js'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
    <div>
      <Nav />
      <Switch>
        <Route path="/areas" component={Areas}/>
        <Route path="/restaurants" component={Areas}/>
      </Switch>
      <Hero />
    </div>
    </Router>
  );
}

export default App;
