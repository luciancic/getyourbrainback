import React from 'react'
import { ResultsProvider } from './ResultsContext'
import { SettingsProvider } from './SettingsContext'

function Provider(props) {
    return <SettingsProvider>
        <ResultsProvider>
            {props.children}
        </ResultsProvider>
    </SettingsProvider>
}

export default Provider
