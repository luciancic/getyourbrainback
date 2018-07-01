import { SETTINGS_CHANGE } from '../actions/types';

const defaultSettings = {
    n: 2,
    maxRounds: 22,
    duration: 2000
};

export default (state = defaultSettings, action) => {
    if (action.type === SETTINGS_CHANGE) {
        return Object.assign({}, state, action.payload);
    } else return state;
}