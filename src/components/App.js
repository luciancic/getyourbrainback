import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Menu from './Menu';
import Game from './game/Game';
import Results from './Results';
import Settings from './Settings';
import Tutorial from './tutorial/Tutorial';
import 'materialize-css/dist/css/materialize.min.css';

import store from '../store';

class App extends Component {
  render() {
    // For quick dev testing only, remove later!
    window.store = store;

    return <BrowserRouter>
      <div>
        <Route exact path='/' component={Menu}/>
        <Route path='/game' component={Game}/>
        <Route path='/results' component={Results}/>
        <Route path='/settings' component={Settings}/>
        <Route path='/tutorial' component={Tutorial}/>
      </div>
    </BrowserRouter>
  }
}

export default App
