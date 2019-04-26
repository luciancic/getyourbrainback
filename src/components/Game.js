import React, { Component } from 'react';
import Court from './court/Court';
import { getFeedbackColor } from '../utils';

export class Game extends Component {
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
                this.props.answer('positions');
                break;
            case 'l':
                this.props.answer('letters');
                break;
            default:
                break;
        }
    }

    playRound = () => {
        const { startRound, endRound } = this.props;
        const { duration } = this.props.settings;
        startRound();
        this.timeout = setTimeout(() => {
            endRound();
        }, duration);
    }

    render() {
        const { audioPlayed, game, settings, feedback } = this.props;
        const { n, maxRounds } = settings;
        const { gameRunning, roundActive, currentRound, positions, letters } = game;
        const remainingRounds = maxRounds - currentRound + n + 1;
        const positionsButtonColor = getFeedbackColor(feedback.positions);
        const lettersButtonColor = getFeedbackColor(feedback.letters);
        
        return <Court 
            audioPlayed={audioPlayed}
            letters={letters}
            lettersButtonColor={lettersButtonColor}
            lettersHandler={this.props.answer.bind(this, 'letters')}
            maxRounds={maxRounds}
            n={n}
            playAudio={this.props.playAudio}
            positions={positions}
            positionHandler={this.props.answer.bind(this, 'positions')}
            positionsButtonColor={positionsButtonColor}
            remainingRounds={remainingRounds}
            roundActive={roundActive}
            shouldRedirect={!gameRunning}
        />
    }
}

export default Game;
