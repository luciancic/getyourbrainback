import React, { Fragment, useContext, useState } from 'react'
import { Redirect } from 'react-router-dom'
import Court from './court/Court'
import SettingsContext from '../context/SettingsContext'
import ResultsContext from '../context/ResultsContext'
import { generateGameArray } from '../utils'

function Game() {
    const [settings] = useContext(SettingsContext)
    const addResult = useContext(ResultsContext)[1]
    const [gameOver, setGameOver] = useState(false)
    const { n, maxRounds, duration } = settings
    const letters = generateGameArray(maxRounds, n)
    const positions = generateGameArray(maxRounds, n)
    const score = {
        n, 
        maxRounds,
        score: {
            positions: {
                correct: 0,
                mistakes: 0
            },
            letters: {
                correct: 0,
                mistakes: 0
            }
        }
    }

    function changeScore(score, stim, isCorrect) {
        if (isCorrect) {
            score.score[stim].correct++
        } else {
            score.score[stim].mistakes++
        }
    }
    const handlePositionScore = changeScore.bind(this, score, 'positions')
    const handleLettersScore = changeScore.bind(this, score, 'letters')

    function endGame() {
        setGameOver(true)
        addResult(score)
    }

    return <Fragment>
        <Court 
            endGame={endGame}
            handleLettersScore={handleLettersScore}
            handlePositionScore={handlePositionScore}
            letters={letters}
            duration={duration}
            maxRounds={maxRounds}
            n={n}
            positions={positions}
        />
        { gameOver && <Redirect to="/results" /> }
    </Fragment>
}

export default Game