import React from 'react'

function PositionCircle(props) {
    return <div className={`position-circle green ${props.active ? "" : "lighten-4"}`} />
}

export default PositionCircle