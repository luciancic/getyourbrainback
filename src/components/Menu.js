import React from 'react'
import { Link } from 'react-router-dom'

function Menu() {
    return <div className='menu'>
        <h1 className="menu--text">Get Your Brain Back!</h1>
        <Link to='/game'><button className='menu--button btn green'>Play</button></Link>
        <Link to='/tutorial'><button className='menu--button btn blue'>Tutorial</button></Link>
        <Link to='/results'><button className='menu--button btn purple'>Results</button></Link>
        <Link to='/settings'><button className='menu--button btn orange'>Settings</button></Link>
    </div>
}

export default Menu