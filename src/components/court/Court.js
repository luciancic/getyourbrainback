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
    render() {
        const { 
            audioPlayed, 
            letters, 
            lettersButtonColor,
            lettersHandler,
            maxRounds, 
            n,
            playAudio, 
            positions, 
            positionsButtonColor, 
            positionHandler,
            remainingRounds, 
            roundActive,
            shouldRedirect 
        } = this.props;

        return <div className="court">
            <IndicatorBar maxRounds={maxRounds} remainingRounds={remainingRounds} n={n} />
            <PositionBoard active={roundActive} currentPosition={positions[0]}/>
            <div className="court-buttons">
                <MatchButton color={positionsButtonColor} name="Match Position" onClick={positionHandler}/>
                <MatchButton color={lettersButtonColor} name="Match Letter" onClick={lettersHandler}/>
            </div>
            <Letters roundActive={roundActive} currentLetter={letters[0]} audioPlayed={audioPlayed} playAudio={playAudio}/>
            { shouldRedirect ?  <Redirect to="/" /> : null  } 
        </div>
    }
}

export default escapeable(Court);