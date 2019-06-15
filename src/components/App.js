import React from 'react'
import ContextProvider from '../context'
import Router from './Router'

import 'materialize-css/dist/css/materialize.min.css'
import '../styles/styles.scss'

function App() {
  return <ContextProvider>
    <Router />
  </ContextProvider>
}

export default App
