// Component shared across Game and Tutorial
import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import IndicatorBar from './IndicatorBar';
import Letters from './Letters';
import MatchButton from './MatchButton';
import PositionBoard from './PositionBoard';
import escapeable from '../escapeable';

import './Court.css';

export class Court extends Component {
    state = {
        canPlayAudio: false,
        currentRound: -1,
        roundActive: false
    }

    componentDidMount() {
        const { endGame, duration, maxRounds, n } = this.props;
        
        // First round starts immediately.
        this.playRound();

        // Set up a round loop.
        this.interval = setInterval(() => {
            // Do not destructure currentRound because it needs to check value by reference.
            if (this.state.currentRound === maxRounds + n - 1) {
                // if endGame handler provided, call it
                // else repeat the game again
                if (endGame) return endGame()
                else return setTimeout(() => { this.playRound() }, 1000)
            }
            this.playRound();
        }, duration + 300);

        window.addEventListener('keydown', this.gameListener, false);
    }
    
    componentWillUnmount() {
        clearInterval(this.interval);
        clearTimeout(this.timeout);
        window.removeEventListener('keydown', this.gameListener, false);
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
        const { duration } = this.props;
        
        this.setState({ 
            canPlayAudio: true,
            currentRound: this.state.currentRound + 1,
            roundActive: true
        })
        this.timeout = setTimeout(() => {
            this.setState({ roundActive: false });
        }, duration);
    }


    render() {
        const { 
            letters, 
            lettersButtonColor,
            lettersHandler,
            maxRounds, 
            n,
            positions, 
            positionsButtonColor, 
            positionHandler,
            shouldRedirect 
        } = this.props
        const { canPlayAudio, currentRound, roundActive } = this.state

        return <div className="court">
            <IndicatorBar maxRounds={maxRounds} currentRound={currentRound} n={n} />
            <PositionBoard active={roundActive} currentPosition={positions[this.state.currentRound]}/>
            <div className="court-buttons">
                <MatchButton color={positionsButtonColor} name="Match Position" onClick={positionHandler}/>
                <MatchButton color={lettersButtonColor} name="Match Letter" onClick={lettersHandler}/>
            </div>
            <Letters active={roundActive} currentLetter={letters[this.state.currentRound]} canPlayAudio={canPlayAudio} disableAudio={() => this.setState({ canPlayAudio: false })}/>
            { shouldRedirect ?  <Redirect to="/" /> : null  } 
        </div>
    }
}

export default escapeable(Court);