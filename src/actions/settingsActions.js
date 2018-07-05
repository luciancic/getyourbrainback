import { SETTINGS_CHANGE } from './types';


export const changeSettings = (settings) => {
    storeSettings(settings);

    return {
        type: SETTINGS_CHANGE,
        payload: settings
    }
}

// Impure function but we can live with that for now;
function storeSettings(settings) {
    let storedSettings = JSON.parse(window.localStorage.getItem('settings'));
    storedSettings = storedSettings || {};
    const newSettings = Object.assign(storedSettings, settings);
    window.localStorage.setItem('settings', JSON.stringify(newSettings));
}