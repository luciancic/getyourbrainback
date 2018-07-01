import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions/settingsActions';
import Menu from './Menu';
import Game from './Game';
import Results from './Results';
import Settings from './Settings';
import 'materialize-css/dist/css/materialize.min.css';

import store from '../store';

class App extends Component {
  componentDidMount() {
    this.props.initializeSettings();
  }
  render() {
    // For quick dev testing only, remove later!
    window.store = store;

    return <BrowserRouter>
      <div>
        <Route exact path='/' component={Menu}/>
        <Route path='/game' component={Game}/>
        <Route path='/results' component={Results}/>
        <Route path='/settings' component={Settings}/>
      </div>
    </BrowserRouter>
  }
}

export default connect(null, actions)(App)
