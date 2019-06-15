import React, { useState } from 'react'
import Menu from './Menu'
import Game from './Game'
import Tutorial from './Tutorial'
import Results from './Results'
import Settings from './Settings'

function Router() {
    const [component, setComponent] = useState('Menu');
    
    function renderComponent(component) {
        return (component === 'Menu') ? <Menu redirectTo={setComponent} /> :
            (component === 'Game') ? <Game redirectTo={setComponent} /> :
            (component === 'Tutorial') ? <Tutorial redirectTo={setComponent} /> :
            (component === 'Results') ? <Results redirectTo={setComponent} /> :
            (component === 'Settings') ? <Settings redirectTo={setComponent} /> : null
    }

    return renderComponent(component)
}

export default Router