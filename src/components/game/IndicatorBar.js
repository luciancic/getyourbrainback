import React from 'react';
import Indicator from './Indicator';
import RemainingRoundsIndicator from './RemainingRoundsIndicator';

export default ({ maxRounds, remainingRounds, n }) => (
    <div style={{ margin: '15px 0' }}>
        <RemainingRoundsIndicator maxRounds={maxRounds} remainingRounds={remainingRounds}/>
        <Indicator displaySide="right">N: {n}</Indicator>
        <br/>
    </div>
)
