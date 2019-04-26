import { SETTINGS_CHANGE } from '../actions/types';

const storedSettigns = JSON.parse(window.localStorage.getItem('settings'));

const defaultSettings = Object.assign({
    n: 2,
    maxRounds: 20,
    duration: 2000,
    options: { // These are static
        n: [ 2, 3, 4, 5, 6, 7, 8, 9, 10 ],
        maxRounds: [ 10, 15, 20, 25, 30 ],
        duration: [ 1000, 1500, 2000, 2500, 3000, 3500 ]
    }
}, storedSettigns);

export default (state = defaultSettings, action) => {
    if (action.type === SETTINGS_CHANGE) {
        return Object.assign({}, state, action.payload);
    } else return state;
}