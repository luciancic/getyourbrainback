import { ROUND_END, USER_ANSWERED } from '../actions/types';

const initialScore = {
    position: {
        correct: 0,
        mistakes: 0
    },
    letters: {
        correct: 0,
        mistakes: 0
    }
}

export default (state = initialScore, action) => {
    switch (action.type) {
        case ROUND_END: {
            return state;
        }
        case USER_ANSWERED: {
            return state;
        }
        default: return state;
    }
}