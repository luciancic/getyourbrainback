import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import escapeable from './escapeable'
import ResultsContext from '../context/ResultsContext'

export function Results() {
    const [ res ] = useContext(ResultsContext)
    const lastResult = Array.isArray(res) ? res[0] : []

    return <div>
        <h1>Results</h1>
        { lastResult ? 
            <p>Last game results: { calculatePercentage(lastResult.score) }%</p> 
            :
            <p>No results yet, play a game!</p>
        }
        <div>
            <Link to='/game'><button className='btn green'>{ lastResult ? 'Play again' : 'Play' }</button></Link>
            <Link to='/'><button className='btn orange'>Menu</button></Link>
        </div>
    </div>
}

function calculatePercentage(result) {
    const cp = result.positions.correct
    const mp = result.positions.mistakes
    const cl = result.letters.correct
    const ml = result.letters.mistakes
    const total = cp + mp + cl + ml

    return Math.round( (cp + cl) / total * 100 )
}

export default escapeable(Results)