import React, { createContext, useState } from 'react'
import { LocalStorage } from '../utils'

const SettingsContext = createContext()

export default SettingsContext
export function SettingsProvider(props) {
    const storedSettigns = LocalStorage.get('settings')

    const initialSettings = Object.assign({
        n: 2,
        maxRounds: 20,
        duration: 2000,    
    }, storedSettigns)

    const [settings, __setSettings__] = useState(initialSettings)
    
    function setSettings(name, value) {
        if (!Object.keys(settings).includes(name)) {
            throw new TypeError(`${name} is not a valid setting`)
        }
        
        const newSettings = settings
        newSettings[name] = value
        __setSettings__(newSettings)
        LocalStorage.set('settings', newSettings)
    }

    const value = [settings, setSettings]

    return <SettingsContext.Provider value={value}>
        {props.children}
    </SettingsContext.Provider>
}