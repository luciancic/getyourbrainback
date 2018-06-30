import React from 'react';

function renderPositionBoard() {
    const style = { style: {
        width: '40px',
        height: '40px',
        borderRadius: '100%',
        backgroundColor: 'blue'
    }};
    const arr = [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ];
    return arr.map((i) => {
        return <div id={`position-${i}`} {...style} key={i} />
    })
}

const GameBoard = () => (
    <div className='container'>
        <span className='left'>Remaining rounds: 2</span>
        <span className='right'>N-back: 2</span>
        {renderPositionBoard()}
        <button className='btn'>Match Position</button>
        <button className='btn'>Match Letter</button>
    </div>
);

export default GameBoard;
