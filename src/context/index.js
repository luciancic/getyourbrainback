import React from 'react'
import { ResultsProvider } from './ResultsContext'
import { SettingsProvider } from './SettingsContext'

export default function Provider(props) {
    return <SettingsProvider>
        <ResultsProvider>
            {props.children}
        </ResultsProvider>
    </SettingsProvider>
}
