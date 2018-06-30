import { SETTINGS_CHANGE, SETTINGS_INITIALIZE } from '../actions/types';

const defaultSettings = {
    n: 2,
    maxRounds: 22,
    duration: 2000
};

export default (state = defaultSettings, action) => {
    switch (action.type) {
        case SETTINGS_CHANGE: {
            break
        }    
        case SETTINGS_INITIALIZE: {
            break
        }
        default: return state;
    }
}