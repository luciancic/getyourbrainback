import React from 'react';
import './GameBoard.css';
import PositionCircle from './PositionCircle';

function renderPositionBoard(active,currentPosition) {
    const arr = [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ];
    return <div className="row teal lighten-5 position-board" >{arr.map((i) => {
        return <PositionCircle active={ active && i === currentPosition} key={i} />
    })}
    </div>
}

const GameBoard = ({ active, currentPosition }) => (
    <div>
        <br/>
        {renderPositionBoard( active, currentPosition )}
        <button className='btn'>Match Position</button>
        <button className='btn'>Match Letter</button>
    </div>
);

export default GameBoard;
