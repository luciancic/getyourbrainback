import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import GameBoard from './game/GameBoard';
import IndicatorBar from './game/IndicatorBar';
import { startGame, endGame, cancelGame } from '../actions/gameActions';
import { startRound, endRound } from '../actions/roundActions';

import './Game.css';

class Game extends Component {
    componentDidMount() {
        const { endGame, cancelGame } = this.props;
        const { ended, currentRound } = this.props.game;
        const { duration, maxRounds, n } = this.props.settings;

        // First round starts immediately.
        if (!ended) this.playRound();

        // Set up a round loop.
        this.interval = setInterval(() => {
            if (currentRound === maxRounds + n) {
                return endGame();
            }
            this.playRound();
        }, duration + 300);

        this.cancelGameListener = (e) => { if (e.key === 'Escape') cancelGame() };
        window.addEventListener('keydown', this.cancelGameListener, false);
    }
    
    componentWillUnmount() {
        const { game, cancelGame } = this.props;
        
        clearInterval(this.interval);
        clearTimeout(this.timeout);
        window.removeEventListener('keydown', this.cancelGameListener, false);
        
        // In case component unmounts because of back navigation, we need to cancel manually.
        if (!game.ended) { cancelGame() }
    }
    
    playRound = () => {
        const { game, settings, startRound, endRound } = this.props;
        const { n, duration } = settings;
        const { positions, letters } = game;
        startRound(positions[n - 1], letters[n - 1]);
        this.timeout = setTimeout(() => {
            endRound();
        }, duration);
    }

    render() {
        const { n, maxRounds } = this.props.settings;
        const { ended, positions, roundActive, currentRound } = this.props.game;
        const remainingRounds = maxRounds - currentRound + n + 1;
        
        return <div className="game">
            <IndicatorBar maxRounds={maxRounds} remainingRounds={remainingRounds} n={n} />
            <GameBoard active={roundActive} currentPosition={positions[0]}/>
            <div className="game-buttons"> 
                <button className='btn'>Match Position</button>
                <button className='btn'>Match Letter</button>
            </div>
            { ended ? <Redirect to="/" /> : null }
        </div>
    }
}

function mapStateToProps({ settings, game, roundActive }) {
    return { settings, game }
}

const actions = {
    startGame, 
    endGame, 
    cancelGame,
    startRound,
    endRound
}

export default connect(mapStateToProps, actions)(Game)
