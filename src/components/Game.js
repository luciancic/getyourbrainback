import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import GameBoard from './game/GameBoard';
import IndicatorBar from './game/IndicatorBar';
import { startGame, endGame, cancelGame } from '../actions/gameActions';
import { startRound, endRound, answer } from '../actions/roundActions';

import './Game.css';

class Game extends Component {
    componentDidMount() {
        const { endGame } = this.props;
        const { gameRunning } = this.props.game;
        const { duration, maxRounds, n } = this.props.settings;

        // First round starts immediately.
        if (gameRunning) this.playRound();

        // Set up a round loop.
        this.interval = setInterval(() => {
            // Do not destructure currentRound because it needs to check value by reference.
            if (this.props.game.currentRound === maxRounds + n) {
                return endGame();
            }
            this.playRound();
        }, duration + 300);

        window.addEventListener('keydown', this.gameListener, false);
    }
    
    componentWillUnmount() {
        const { game, cancelGame } = this.props;
        
        clearInterval(this.interval);
        clearTimeout(this.timeout);
        window.removeEventListener('keydown', this.gameListener, false);
        
        // In case component unmounts because of back navigation, we need to cancel manually.
        if (game.gameRunning) { cancelGame() }
    }
    
    gameListener = (e) => {
        switch (e.key) {
            case 'Escape':
                this.props.cancelGame();
                break;
            case 'a':
                this.match('positions')();
                break;
            case 'l':
                this.match('letters')();
                break;
            default:
                break;
        }
    }

    match = (stimulus) => () => {
        const { answer, settings } = this.props;
        const { answers, currentRound, roundActive } = this.props.game;
        const presentArray = this.props.game[stimulus];
        
        if (answers[stimulus] === null && roundActive && currentRound > settings.n) {
            answer({ [stimulus]: presentArray[0] === presentArray[settings.n]})
        }
    }

    playRound = () => {
        const { startRound, endRound } = this.props;
        const { n, duration } = this.props.settings;
        const { positions, letters } = this.props.game;
        startRound(positions[n - 1], letters[n - 1]);
        this.timeout = setTimeout(() => {
            // Must destructure values from game inside the setTimeout to ensure the values are extracted at the correct moment. 
            const { answers, positions, letters } = this.props.game;
            endRound({ 
                positionMissed: answers.positions === null && positions[0] === positions[n], 
                letterMissed: answers.letters === null && letters[0] === letters[n]
            });
        }, duration);
    }

    getFeedbackColor(feedback) {
        switch (feedback) {
            case null: return 'white';
            case 'correct': return 'green';
            case 'mistake': return 'red';
            case 'missed': return 'blue';
            default: break;
        }
    }

    render() {
        const { n, maxRounds } = this.props.settings;
        const { gameRunning, positions, roundActive, currentRound } = this.props.game;
        const remainingRounds = maxRounds - currentRound + n + 1;
        const positionsButtonColor = this.getFeedbackColor(this.props.feedback.positions);
        const lettersButtonColor = this.getFeedbackColor(this.props.feedback.letters);

        return <div className="game">
            <IndicatorBar maxRounds={maxRounds} remainingRounds={remainingRounds} n={n} />
            <GameBoard active={roundActive} currentPosition={positions[0]}/>
            <div className="game-buttons"> 
                <button className={`btn ${positionsButtonColor} lighten-4 blue-text text-darken-4`} onClick={this.match('positions')}>Match Position</button>
                <button className={`btn ${lettersButtonColor} lighten-4 blue-text text-darken-4`} onClick={this.match('letters')}>Match Letter</button>
            </div>
            { !gameRunning ? <Redirect to="/" /> : null }
        </div>
    }
}

function mapStateToProps({ settings, game, feedback }) {
    return { settings, game, feedback }
}

const actions = {
    answer,
    startGame, 
    endGame, 
    cancelGame,
    startRound,
    endRound
}

export default connect(mapStateToProps, actions)(Game)
