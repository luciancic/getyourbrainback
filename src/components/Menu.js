import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { startGame} from '../actions/gameActions';

class Menu extends Component {
    render() {
        const style = { style: {}};
        return <div id='menu' className='center' style={{ display: 'grid', gridTemplateRows: '1fr 1fr 1fr 1fr 1fr', alignItems: 'center', height: '100vh' }}>
            <h1 style={{ fontSize: '2.5rem'}}>Get Your Brain Back!</h1>
            <Link to='/game' ><button className='btn' {...style} onClick={this.props.startGame} >Play Game</button></Link>
            <Link to='/tutorial' ><button className='btn' {...style} onClick={this.props.startGame}>Play Tutorial</button></Link>
            <Link to='/settings' ><button className='btn'>Settings</button></Link>
        </div>
    }
}

export default connect(null, { startGame })(Menu);