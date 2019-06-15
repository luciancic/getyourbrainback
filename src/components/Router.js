import React, { useState } from 'react'
import Menu from './Menu'
import GetReady from './GetReady'
import Tutorial from './Tutorial'
import Results from './Results'
import Settings from './Settings'
import Game from './Game'

function Router() {
    const [component, setComponent] = useState('Menu');
    
    function renderComponent(component) {
        return (component === 'Menu') ? <Menu redirectTo={setComponent} /> :
            (component === 'Game') ? <GetReady redirectTo={setComponent} ><Game redirectTo={setComponent} /></GetReady> :
            (component === 'Tutorial') ? <Tutorial redirectTo={setComponent} /> :
            (component === 'Results') ? <Results redirectTo={setComponent} /> :
            (component === 'Settings') ? <Settings redirectTo={setComponent} /> : null
    }

    return renderComponent(component)
}

export default Router