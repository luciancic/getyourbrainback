import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../store';
import MenuContainer from './MenuContainer';
import GameContainer from './GameContainer';
import Results from '../components/Results';
import SettingsContainer from './SettingsContainer';
import TutorialContainer from './TutorialContainer';
import 'materialize-css/dist/css/materialize.min.css';
import './App.css'; // Global styles

export default class App extends Component {
  render() {
    return <Provider store={store}>
      <BrowserRouter>
        <div>
          <Route exact path='/' component={MenuContainer}/>
          <Route path='/game' component={GameContainer}/>
          <Route path='/results' component={Results}/>
          <Route path='/settings' component={SettingsContainer}/>
          <Route path='/tutorial' component={TutorialContainer}/>
        </div>
      </BrowserRouter>
    </Provider>
  }
}
