import React from 'react';
import Game from '../Game';

import RoundBar from './RoundBar';
import './Tutorial.css';

const Tutorial = () => {
    return (
        <div className="tutorial">
            <Game />
            <RoundBar />
        </div>
    );
}

export default Tutorial;
