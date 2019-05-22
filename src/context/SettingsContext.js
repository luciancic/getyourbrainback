import { createContext, useState } from 'react';

const SettingsContext = createContext()

export default SettingsContext
export function SettingsProvider(props) {
    // Get pre-recorded settings or use default
    // get from window.localStorage()
    initialState = { 
        n: 2,
        maxRounds: 20,
        duration: 2000
    } 
    const state = useState(initialState)

    return <SettingsContext.Provider value={state}>
        {props.children}
    </SettingsContext.Provider>
}