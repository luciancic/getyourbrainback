import { SETTINGS_CHANGE } from './types';

let storedSettings = window.localStorage.getItem('settings');

export const initializeSettings = () => {
    if (storedSettings) {
        return { 
            type: SETTINGS_CHANGE,
            payload: storedSettings
        }
    } else return { type: null }
}

export const changeSettings = (settings) => {
    storedSettings = storedSettings || {};
    const newSettings = Object.assign(storedSettings, settings);
    window.localStorage.setItem('settings', newSettings);

    return {
        type: SETTINGS_CHANGE,
        payload: settings
    }
}