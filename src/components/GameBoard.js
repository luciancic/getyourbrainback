import React from 'react';
import './GameBoard.css';

function renderPositionBoard() {
    const arr = [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ];
    return <div className="row teal lighten-5 position-board" >{arr.map((i) => {
        return <div id={`position-${i}`} className="position-circle green lighten-4" key={i} />
    })}
    </div>
}

const GameBoard = () => (
    <div>
        
        <br/>
        {renderPositionBoard()}
        <button className='btn'>Match Position</button>
        <button className='btn'>Match Letter</button>
    </div>
);

export default GameBoard;
