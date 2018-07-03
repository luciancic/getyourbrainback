import { SETTINGS_CHANGE } from './types';

let storedSettings = JSON.parse(window.localStorage.getItem('settings'));
console.log('Stored settings', storedSettings)

export const initializeSettings = () => {
    if (storedSettings) {
        return { 
            type: SETTINGS_CHANGE,
            payload: storedSettings
        }
    } else return { type: null }
}

export const changeSettings = (settings) => {
    console.log('Running change settings action')
    storedSettings = storedSettings || {};
    const newSettings = Object.assign(storedSettings, settings);
    window.localStorage.setItem('settings', JSON.stringify(newSettings));

    return {
        type: SETTINGS_CHANGE,
        payload: settings
    }
}