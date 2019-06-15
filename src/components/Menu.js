import React from 'react'

function Menu(props) {
    const { redirectTo } = props
    
    return <div className='menu'>
        <h1 className="menu__text">Get Your Brain Back!</h1>
        <button className='menu__button btn green' onClick={ () => redirectTo('Game') }>Play</button>
        <button className='menu__button btn blue' onClick={ () => redirectTo('Tutorial') }>Tutorial</button>
        <button className='menu__button btn purple' onClick={ () => redirectTo('Results') }>Results</button>
        <button className='menu__button btn orange' onClick={ () => redirectTo('Settings') }>Settings</button>
    </div>
}

export default Menu