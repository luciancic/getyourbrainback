import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import escapeable from './escapeable'
import ResultsContext from '../context/ResultsContext'

function Results() {
    const [ res ] = useContext(ResultsContext)
    const lastResult = Array.isArray(res) ? res[0] : []

    return <div id="results" className="top-container top-container__results">
        <section id="results-text" className="text-container">
            <h1>Results</h1>
            { lastResult ? 
                <p>Last game results: { calculatePercentage(lastResult.score) }%</p> 
                :
                <p>No results yet, play a game!</p>
            }
        </section>
        <section id="results-buttons" className="button-container button-container__2-buttons">
            <Link to='/game'><button className='btn blue'>{ lastResult ? 'Play again' : 'Play' }</button></Link>
            <Link to='/'><button className='btn purple'>Menu</button></Link>
        </section>
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