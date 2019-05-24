import React, { Fragment } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Provider from '../context';
import Menu from '../components/Menu';
import Game from '../components/Game';
import Results from '../components/Results';
import SettingsContainer from './SettingsContainer';
import TutorialContainer from './TutorialContainer';
import 'materialize-css/dist/css/materialize.min.css';
import './App.css'; // Global styles

export default function App() {
  return <Provider>
    <BrowserRouter>
      <Fragment>
        <Route exact path='/' component={Menu}/>
        <Route path='/game' component={Game}/>
        <Route path='/results' component={Results}/>
        <Route path='/settings' component={SettingsContainer}/>
        <Route path='/tutorial' component={TutorialContainer}/>
      </Fragment>
    </BrowserRouter>
  </Provider>
}
