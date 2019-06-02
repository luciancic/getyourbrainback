import React from 'react'
import escapeable from './escapeable'

export function Results() {
    return <div>
        <h1>Results</h1>
        <p>Results Body</p>
        <div>
            <button>Play Again</button>
            <button>Menu</button>
        </div>
    </div>
}

export default escapeable(Results)