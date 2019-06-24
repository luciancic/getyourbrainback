import React from 'react'

function MatchButton(props) {
    const { color, name, onClick } = props

    return <button className={`court__button ${color}`} onClick={onClick}>
        {name}
    </button>
}

export default MatchButton
