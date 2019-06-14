import React from 'react'
import { Link } from 'react-router-dom'
import escapable from './escapeable'

function Tutorial() {
    return <div className="tutorial">
        <h1>Tutorial</h1>
        <p>This video will show you how to play <em>Get Your Brain Back</em>.</p>
        <iframe title="tutorial" width="560" height="315" src="https://www.youtube.com/embed/nOBlJI5w_vI?start=65" frameBorder="0" allow="autoplay; encrypted-media; picture-in-picture" allowFullScreen></iframe>
        <Link to='/game'><button className='btn green'>Play</button></Link>
        <Link to='/'><button className='btn orange'>Menu</button></Link>
    </div>
} 

export default escapable(Tutorial)
