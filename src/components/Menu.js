import React from 'react'
import { Link } from 'react-router-dom'

function Menu() {
    return <div id='menu' className='top-container top-container--menu'>
        <section id='menu-text' className="text-container">
            <h1>Get Your Brain Back!</h1>
            <p className="hide-on-small">Challenge your brain and improve your working memory. Inspired by <a href='https://wikipedia.org/wiki/N-back' target='_blank' rel="noopener noreferrer">n-back</a>.</p>
        </section>
        <section id='menu-buttons' className="button-container">
            <Link to='/game'><button className='btn green'>Play</button></Link>
            <Link to='/tutorial'><button className='btn blue'>Tutorial</button></Link>
            <Link to='/results'><button className='btn purple'>Results</button></Link>
            <Link to='/settings'><button className='btn orange'>Settings</button></Link>
        </section>
    </div>
}

export default Menu