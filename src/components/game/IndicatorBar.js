import React from 'react';
import Indicator from './Indicator';

function renderRemainingRounds(maxRounds, remainingRounds) {
    return remainingRounds > maxRounds ? 
        <span>{maxRounds}<span className="green-text"> + {remainingRounds - maxRounds}</span></span>
        : remainingRounds
}

export default ({ maxRounds, remainingRounds, n }) => (
    <div>
        <Indicator displaySide="left">Remaining rounds: { renderRemainingRounds(maxRounds, remainingRounds) }</Indicator>
        <Indicator displaySide="right">N: {n}</Indicator>
    </div>
)
