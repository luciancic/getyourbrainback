import { SETTINGS_CHANGE } from '../actions/types';

const storedSettigns = JSON.parse(window.localStorage.getItem('settings'));

const defaultSettings = Object.assign({
    n: 2,
    maxRounds: 20,
    duration: 2000
}, storedSettigns);

export default (state = defaultSettings, action) => {
    if (action.type === SETTINGS_CHANGE) {
        return Object.assign({}, state, action.payload);
    } else return state;
}