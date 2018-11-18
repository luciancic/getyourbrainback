// Component shared across Game and Tutorial
import React, { Component } from 'react';
import { Redirect} from 'react-router-dom';
import IndicatorBar from './IndicatorBar';
import PositionBoard from './PositionBoard';
import Letters from './Letters';

export default class Court extends Component {
    state = { redirect: false };
    
    componentWillMount() {
        this.escapeListener = window.addEventListener('keydown', (e) => { 
            if(e.key === 'Escape') this.setState({redirect: true}) 
        });
    }

    componentWillUnmount() {
        window.removeEventListener('keydown', this.escapeListener);
    }
    
    render() {
        const { maxRounds, roundActive, remainingRounds, n, positions, letters, positionsButtonColor, lettersButtonColor } = this.props;

        return <div className="game">
            <IndicatorBar maxRounds={maxRounds} remainingRounds={remainingRounds} n={n} />
            <PositionBoard active={roundActive} currentPosition={positions[0]}/>
            <Letters roundActive={roundActive} currentLetter={letters[0]}/>
            <div className="game-buttons">
                {/* TODO: extract match function to make it usable in tutorial */}
                <button className={`btn ${positionsButtonColor} lighten-4 blue-text text-darken-4`}>Match Position</button>
                <button className={`btn ${lettersButtonColor} lighten-4 blue-text text-darken-4`}>Match Letter</button>
            </div>
            {this.state.redirect ? <Redirect to='/' /> : null}
            {/* { !gameRunning ? <Redirect to="/" /> : null } */}
        </div>
    }
}