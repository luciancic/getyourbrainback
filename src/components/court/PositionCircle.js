import React from 'react'

function PositionCircle(props) {
    return <div className={`court__position-circle green ${props.active ? "" : "lighten"}`} />
}

export default PositionCircle