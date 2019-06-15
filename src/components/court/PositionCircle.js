import React from 'react'

function PositionCircle(props) {
    return <div className={`court__position-circle red ${props.active ? "" : "lighten-4"}`} />
}

export default PositionCircle