import React, { Fragment, useContext, useState } from 'react'
import { Redirect } from 'react-router-dom'
import Court from './court/Court'
import SettingsContext from '../context/SettingsContext'
import { generateGameArray } from '../utils';

export default function Game(props) {
    const [settings] = useContext(SettingsContext)
    const [gameOver, setGameOver] = useState(false)
    const { n, maxRounds, duration } = settings
    const letters = generateGameArray(maxRounds, n)
    const positions = generateGameArray(maxRounds, n)
    
    return <Fragment>
        <Court 
            endGame={() => setGameOver(true)}
            letters={letters}
            duration={duration}
            maxRounds={maxRounds}
            n={n}
            positions={positions}
        />
        { gameOver && <Redirect to="/results" /> }
    </Fragment>
}