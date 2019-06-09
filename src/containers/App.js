import React, { Fragment } from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import Provider from '../context'
import Menu from '../components/Menu'
import Game from '../components/Game'
import Results from '../components/Results'
import Settings from '../components/Settings'
import Tutorial from '../components/Tutorial'
import 'materialize-css/dist/css/materialize.min.css'
import './App.css' // Global styles

function App() {
  return <Provider>
    <BrowserRouter>
      <Fragment>
        <Route exact path='/' component={Menu}/>
        <Route path='/game' component={Game}/>
        <Route path='/results' component={Results}/>
        <Route path='/settings' component={Settings}/>
        <Route path='/tutorial' component={Tutorial}/>
      </Fragment>
    </BrowserRouter>
  </Provider>
}

export default App
