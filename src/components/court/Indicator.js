import React from 'react'

function Indicator(props) {
    const { children, displaySide } = props

    return <span className={ displaySide } style={{ padding: '0 15px'}}>
        { children }
    </span>
}

export default Indicator