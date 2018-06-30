import { ROUND_START, ROUND_END, USER_ANSWERED } from '../actions/types';

// Possible values are 'correct', 'mistake', 'missed', and null
const initialState = {
    position: null,
    letters: null
}

export default (state = initialState, action) => {
    switch (action.type) {
        case ROUND_START: {
            return initialState;
        }
        case ROUND_END: {
            break
        }
        case USER_ANSWERED: {
            break
        }
        default: return state;
    }
}