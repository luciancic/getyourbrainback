import React from 'react'

function Tutorial(props) {
    return <div className="tutorial">
        <h1>Tutorial</h1>
        <p>This video will show you how to play <em>Get Your Brain Back</em>.</p>
        <iframe title="tutorial" width="560" height="315" src="https://www.youtube.com/embed/nOBlJI5w_vI?start=65" frameBorder="0" allow="autoplay; encrypted-media; picture-in-picture" allowFullScreen></iframe>
        <button className='btn green' onClick={ () => props.redirectTo('Game') }>Play</button>
        <button className='btn orange' onClick={ () => props.redirectTo('Menu') }>Menu</button>
    </div>
} 

export default Tutorial
