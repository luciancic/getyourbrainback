import React, { useContext } from 'react'
import ResultsContext from '../context/ResultsContext'
import EscapableHOC from './EscapableHOC'

function Results(props) {
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
            <button className='blue' onClick={ () => props.redirectTo('Game') }>{ lastResult ? 'Play again' : 'Play' }</button>
            <button className='purple' onClick={ () => props.redirectTo('Menu') }>Menu</button>
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

export default EscapableHOC(Results)