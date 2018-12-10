import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { startGame} from '../actions/gameActions';
import * as styles from './menuStyles';

class Menu extends Component {
    // Media query
    mq = window.matchMedia('(min-width: 768px)');
    state = {
        style: this.mq.matches ? styles.desktopStyles : styles.phoneStyles
    }
    
    componentDidMount() {
        this.mq.onchange = () => {
            this.setState({style: this.mq.matches ? styles.desktopStyles : styles.phoneStyles});
        }
    }

    render() {
        const {style} = this.state;
        return <div id='menu' className='center' style={style.menu}>
            <section id='menu-text' style={style.text}>
                <h1 style={style.textH1}>Get Your Brain Back!</h1>
                <p style={style.textP}>The memory game that is awesome and you will love playing!</p>
            </section>
            <section id='menu-buttons' style={style.buttons}>
                <Link to='/game' style={style.buttonsFirst}><button className='btn green'  onClick={this.props.startGame} style={{ width: '15rem', height: '3rem'}}>Play Game</button></Link>
                <Link to='/tutorial' ><button className='btn blue' onClick={this.props.startGame} style={{ width: '15rem', height: '3rem'}}>Play Tutorial</button></Link>
                <Link to='/settings'  style={style.buttonsLast}><button className='btn orange' style={{ width: '15rem', height: '3rem'}}>Settings</button></Link>
            </section>
        </div>
    }
}

export default connect(null, { startGame })(Menu);