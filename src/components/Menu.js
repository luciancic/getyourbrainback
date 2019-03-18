import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { startGame} from '../actions/gameActions';
import './Menu.css';

class Menu extends Component {
    render() {
        return <div id='menu' className='center'>
            <section id='menu-text'>
                <h1>Get Your Brain Back!</h1>
                <p>Challenge your brain and improve your working memory. Inspired by <a href='https://wikipedia.org/wiki/N-back' target='_blank' rel="noopener noreferrer">n-back</a>.</p>
            </section>
            <section id='menu-buttons'>
                <Link to='/game'><button className='btn green'  onClick={this.props.startGame}>Play Game</button></Link>
                <Link to='/tutorial'><button className='btn blue' onClick={this.props.startGame}>Play Tutorial</button></Link>
                <Link to='/settings'><button className='btn orange'>Settings</button></Link>
            </section>
        </div>
    }
}

export default connect(null, { startGame })(Menu);