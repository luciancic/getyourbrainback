import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import GameBoard from './GameBoard';
import { startGame, endGame, cancelGame } from '../actions/gameActions';
import { startRound, endRound } from '../actions/roundActions';

class Game extends Component {
    componentDidMount() {
        // Do not destructure game because its values will not stay up to date in the interval
        const { settings, endGame } = this.props;

        this.playRound();
        this.interval = setInterval(() => {
            if (this.props.game.currentRound === settings.maxRounds + settings.n) {
                return endGame();
            }
            this.playRound();
        }, settings.duration + 300);
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

    componentWillUnmount() {
        const { game, cancelGame } = this.props;

        clearInterval(this.interval);
        clearTimeout(this.timeout);
        if (!game.ended) { cancelGame() }
    }
    
    render() {
        const { n, maxRounds } = this.props.settings;
        const { currentRound, ended, positions, roundActive } = this.props.game;
        const remainingRounds = maxRounds - currentRound + n + 1;

        return <div className="container">
            <div style={{ display: 'block', marginTop: '15px' }}>
                <span className='left' style={{ paddingLeft: '15px'}}>Remaining rounds: { remainingRounds }</span>
                <span className='right' style={{ paddingRight: '15px'}}>N-back: {n}</span>
            </div>
            <GameBoard active={roundActive} currentPosition={positions[0]}/>
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
