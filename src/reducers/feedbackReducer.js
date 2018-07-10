import { ROUND_START, ROUND_END, USER_ANSWERED } from '../actions/types';

// Possible values are 'correct', 'mistake', 'missed', and null
const initialState = {
    positions: null,
    letters: null
}

export default (state = initialState, action) => {
    switch (action.type) {
        case ROUND_START: {
            return initialState;
        }
        case ROUND_END: {
            const newState = {};
            if (action.payload.positionMissed) { newState.positions = 'missed' }
            if (action.payload.letterMissed) { newState.letters = 'missed' }
            return Object.assign({}, state, newState);
        }
        case USER_ANSWERED: {
            const newState = {};
            if (action.payload.hasOwnProperty('positions')) {
                newState.positions = action.payload.positions ? 'correct' : 'mistake';
            } else if (action.payload.hasOwnProperty('letters')) {
                newState.letters = action.payload.letters ? 'correct' : 'mistake';
            }
            return Object.assign({}, state, newState);
        }
        default: return state;
    }
}