import React from 'react';

const Indicator = ({ children, displaySide}) => {
    return <span className={ displaySide } style={{ padding: '0 15px'}}>{ children }</span>
}

export default Indicator;