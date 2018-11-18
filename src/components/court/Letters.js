import React from 'react';
import Letter from './Letter';

const arr = [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ];

export default ({ roundActive, audioPlayed, currentLetter, playAudio }) => (
    <div id="letters">
        {arr.map((i) => {
            return <Letter number={i} playAudio={playAudio} audioShouldPlay={roundActive && !audioPlayed && i === currentLetter} key={i} />
        })}
    </div>
)