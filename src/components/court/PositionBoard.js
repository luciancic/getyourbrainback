import React from 'react'
import './PositionBoard.css'
import PositionCircle from './PositionCircle'

function PositionBoard(props) {
    const { active, currentPosition } = props
    const arr = [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ]

    return <div className="teal lighten-5 position-board" >
        {arr.map((i) => {
            return <PositionCircle active={ active && i === currentPosition} key={i} />
        })}
    </div>
}

export default PositionBoard
