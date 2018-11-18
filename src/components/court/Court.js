// Component shared across Game and Tutorial
import React, { Component } from 'react';
import IndicatorBar from './IndicatorBar';
import PositionBoard from './PositionBoard';
import Letters from './Letters';
import escapeable from '../escapeable';

class Court extends Component {
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
            {/* { !gameRunning ? <Redirect to="/" /> : null } */}
        </div>
    }
}

export default escapeable(Court);