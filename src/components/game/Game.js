import React, { Component } from 'react';
import { connect } from 'react-redux';
import Court from '../court/Court';
import { startGame, endGame, cancelGame } from '../../actions/gameActions';
import { startRound, endRound, answer, playAudio } from '../../actions/roundActions';

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
        const { audioPlayed, game, settings } = this.props;
        const { n, maxRounds } = settings;
        const { gameRunning, roundActive, currentRound } = game;
        const remainingRounds = maxRounds - currentRound + n + 1;
        const positionsButtonColor = this.getFeedbackColor(this.props.feedback.positions);
        const lettersButtonColor = this.getFeedbackColor(this.props.feedback.letters);
        
        const { positions, letters } = this.props.game;
        return <Court 
            audioPlayed={audioPlayed}
            gameRunning={gameRunning}
            letters={letters}
            lettersButtonColor={lettersButtonColor}
            lettersHandler={this.match('letters')}
            maxRounds={maxRounds}
            n={n}
            playAudio={this.props.playAudio}
            positions={positions}
            positionHandler={this.match('positions')}
            positionsButtonColor={positionsButtonColor}
            remainingRounds={remainingRounds}
            roundActive={roundActive}
        />
    }
}

function mapStateToProps({ settings, game, feedback, audioPlayed }) {
    return { settings, game, feedback, audioPlayed }
}

const actions = {
    answer,
    startGame, 
    endGame, 
    cancelGame,
    startRound,
    endRound,
    playAudio
}

export default connect(mapStateToProps, actions)(Game)
