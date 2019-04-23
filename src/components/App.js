import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../store';
import Menu from './Menu';
import Game from './game/Game';
import Results from './Results';
import Settings from './Settings';
import Tutorial from './tutorial/Tutorial';
import 'materialize-css/dist/css/materialize.min.css';
import './App.css'; // Global styles

export default class App extends Component {
  render() {
    return <Provider store={store}>
      <BrowserRouter>
        <div>
          <Route exact path='/' component={Menu}/>
          <Route path='/game' component={Game}/>
          <Route path='/results' component={Results}/>
          <Route path='/settings' component={Settings}/>
          <Route path='/tutorial' component={Tutorial}/>
        </div>
      </BrowserRouter>
    </Provider>
  }
}
