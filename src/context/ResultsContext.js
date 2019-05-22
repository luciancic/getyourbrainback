import { createContext, useState } from 'react';

const ResultsContext = createContext()

export default ResultsContext

export function ResultsProvider(props) {
    const state = useState({})
    return <ResultsContext.Provider value={state}>
        {props.children}
    </ResultsContext.Provider>
}