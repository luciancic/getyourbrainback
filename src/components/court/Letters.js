import React from 'react'
import Letter from './Letter'

function Letters(props) {
    const { active, canPlayAudio, currentLetter, disableAudio } = props
    const arr = [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ]
    
    return <div id="letters">
        {arr.map((i) => {
            return <Letter 
                number={i} 
                disableAudio={disableAudio} 
                audioShouldPlay={active && canPlayAudio && i === currentLetter} 
                key={i} 
            />
        })}
    </div>
}

export default Letters
