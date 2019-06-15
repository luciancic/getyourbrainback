import React from 'react'

function Indicator(props) {
    const { children, displaySide } = props

    return <span className={ displaySide }>
        { children }
    </span>
}

export default Indicator