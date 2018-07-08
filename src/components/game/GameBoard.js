import React from 'react';
import './GameBoard.css';
import PositionCircle from './PositionCircle';

const arr = [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ];

export default ({ active, currentPosition }) => (
    <div className="teal lighten-5 position-board" >
        {arr.map((i) => {
            return <PositionCircle active={ active && i === currentPosition} key={i} />
        })}
    </div>
)
