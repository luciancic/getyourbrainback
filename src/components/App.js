import React, { Fragment } from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import ContextProvider from '../context'
import Menu from './Menu'
import Game from './Game'
import Results from './Results'
import Settings from './Settings'
import Tutorial from './Tutorial'
import 'materialize-css/dist/css/materialize.min.css'
import '../styles/styles.scss'

function App() {
  return <ContextProvider>
    <BrowserRouter>
      <Fragment>
        <Route exact path='/' component={Menu}/>
        <Route path='/game' component={Game}/>
        <Route path='/results' component={Results}/>
        <Route path='/settings' component={Settings}/>
        <Route path='/tutorial' component={Tutorial}/>
      </Fragment>
    </BrowserRouter>
  </ContextProvider>
}

export default App
