import React, { createContext, useState } from 'react'
import { LocalStorage } from '../utils'

const ResultsContext = createContext()

// Result object anatomy:
// 
// const result = {
//     n: 2, 
//     maxRounds: 20,
//     score: {
//         positions: {
//             correct: 7,
//             mistakes: 2
//         },
//         letters: {
//             correct: 3,
//             mistakes: 4
//         }
//     }
// }

export function ResultsProvider(props) {
    const storedRecords = LocalStorage.get('records')
    
    const initialRecords = storedRecords || []
    
    const [records, __setRecords__] = useState(initialRecords)
    
    function addRecord(record) {
        const newRecords = records.slice(0)

        // Only keep the last 20 game results
        if (newRecords.length === 20) newRecords.shift()
        newRecords.unshift(record)

        __setRecords__(newRecords)
        LocalStorage.set('records', newRecords)
    }
    
    const value = [records, addRecord]
    
    return <ResultsContext.Provider value={value}>
        {props.children}
    </ResultsContext.Provider>
}

export default ResultsContext
