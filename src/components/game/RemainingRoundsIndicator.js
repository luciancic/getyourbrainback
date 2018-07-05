import React from 'react';
import Indicator from './Indicator';

const RemainingRoundsIndicator = ({ maxRounds, remainingRounds}) => {
    return <Indicator displaySide="left">Remaining rounds:&nbsp;
        { remainingRounds > maxRounds ? 
            <span>{maxRounds}<span className="green-text"> + {remainingRounds - maxRounds}</span></span>
            : remainingRounds
        }
    </Indicator> 
}

export default RemainingRoundsIndicator