import React from 'react'
import { ResultsProvider } from './ResultsContext'
import { SettingsProvider } from './SettingsContext'

export default props => (
    <SettingsProvider>
        <ResultsProvider>
            {props.children}
        </ResultsProvider>
    </SettingsProvider>
)