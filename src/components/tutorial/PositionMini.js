import React from 'react';
import GameBoard from '../game/GameBoard';

const PositionMini = ({currentPosition}) => {
    return (
        <div className="positionMini">
            <GameBoard active={true} currentPosition={currentPosition}/>
        </div>
    );
}

export default PositionMini;