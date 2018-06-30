import React from 'react';
import { Link } from 'react-router-dom';

export default () => {
    return <div id='menu'>
        <h1>Get Your Brain Back!</h1>
        <Link to='/game' ><button>Play Game</button></Link>
        <Link to='/tutorial' ><button>Play Tutorial</button></Link>
        <Link to='/settings' ><button>Settings</button></Link>
    </div>
}