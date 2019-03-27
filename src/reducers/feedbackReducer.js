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
            const { positionMissed, letterMissed } = action.payload;
            return Object.assign({}, state, {
                positions: positionMissed ? 'missed' : null,
                letters: letterMissed ? 'missed' : null
            });
        }
        case USER_ANSWERED: {
            const { stimulusChosen, answerCorrect } = action.payload;
            const newState = {};
            newState[stimulusChosen] = answerCorrect ? 'correct' : 'mistake';
            return Object.assign({}, state, newState);
        }
        default: return state;
    }
}