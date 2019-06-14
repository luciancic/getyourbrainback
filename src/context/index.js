import React from 'react'
import { ResultsProvider } from './ResultsContext'
import { SettingsProvider } from './SettingsContext'

function ContextProvider(props) {
    return <SettingsProvider>
        <ResultsProvider>
            {props.children}
        </ResultsProvider>
    </SettingsProvider>
}

export default ContextProvider
