import React from 'react'
import { Link } from 'react-router-dom'

function Menu() {
    return <div className='menu'>
        <h1 className="menu__text">Get Your Brain Back!</h1>
        <Link to='/game'><button className='menu__button btn green'>Play</button></Link>
        <Link to='/tutorial'><button className='menu__button btn blue'>Tutorial</button></Link>
        <Link to='/results'><button className='menu__button btn purple'>Results</button></Link>
        <Link to='/settings'><button className='menu__button btn orange'>Settings</button></Link>
    </div>
}

export default Menu