import React from 'react';
import { Link } from 'react-router-dom';

export default () => {
    const style = { style: { marginBottom: '20px' }};
    return <div id='menu' className='center'>
        <h1>Get Your Brain Back!</h1>
        <Link to='/game' ><button className='btn' {...style}>Play Game</button></Link><br/>
        <Link to='/tutorial' ><button className='btn' {...style}>Play Tutorial</button></Link><br/>
        <Link to='/settings' ><button className='btn'>Settings</button></Link>
    </div>
}