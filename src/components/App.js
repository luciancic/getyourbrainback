import React from 'react'
import ContextProvider from '../context'
import Router from './Router'

import 'normalize.css'
import '../styles/styles.scss'

function App() {
  return <ContextProvider>
    <Router />
  </ContextProvider>
}

export default App
