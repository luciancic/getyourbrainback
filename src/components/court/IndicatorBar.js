import React from 'react'
import Indicator from './Indicator'

function renderRemainingRounds(maxRounds, remainingRounds) {
    return remainingRounds > maxRounds ? 
        <span>{maxRounds}<span className="green-text"> + {remainingRounds - maxRounds}</span></span>
        : remainingRounds
}

function IndicatorBar(props) {
    const { maxRounds, currentRound, n } = props
    const remainingRounds = maxRounds + n - currentRound

    return <div id="indicator-bar">
        <Indicator displaySide="left">Remaining rounds: { renderRemainingRounds(maxRounds, remainingRounds) }</Indicator>
        <Indicator displaySide="right">N: {n}</Indicator>
    </div>
}

export default IndicatorBar
