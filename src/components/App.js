import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Menu from './Menu';
import Game from './Game';
import Results from './Results';
import Settings from './Settings';
import 'materialize-css/dist/css/materialize.min.css';

export default () => {
  return <BrowserRouter>
    <div>
      <Route exact path='/' component={Menu}/>
      <Route path='/game' component={Game}/>
      <Route path='/results' component={Results}/>
      <Route path='/settings' component={Settings}/>
    </div>
  </BrowserRouter>
}
