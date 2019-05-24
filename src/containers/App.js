import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Provider from '../context';
import Menu from '../components/Menu';
import Game from '../components/Game';
import Results from '../components/Results';
import SettingsContainer from './SettingsContainer';
import TutorialContainer from './TutorialContainer';
import 'materialize-css/dist/css/materialize.min.css';
import './App.css'; // Global styles

export default class App extends Component {
  render() {
    return <Provider>
      <BrowserRouter>
        <div>
          <Route exact path='/' component={Menu}/>
          <Route path='/game' component={Game}/>
          <Route path='/results' component={Results}/>
          <Route path='/settings' component={SettingsContainer}/>
          <Route path='/tutorial' component={TutorialContainer}/>
        </div>
      </BrowserRouter>
    </Provider>
  }
}
