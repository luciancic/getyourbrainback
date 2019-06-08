import React from 'react'

function MatchButton(props) {
    const { color, name, onClick } = props

    return <button className={`btn ${color} lighten-4 blue-text text-darken-4`} onClick={onClick}>
        {name}
    </button>
}

export default MatchButton
