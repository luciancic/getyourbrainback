import { ROUND_END, USER_ANSWERED, GAME_START } from '../actions/types';

const initialScore = {
    positions: {
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
            // Deep clone state
            const newState = JSON.parse(JSON.stringify(state));
            if (action.payload.positionMissed) {
                newState.positions.mistakes += 1;
            } if (action.payload.letterMissed) {
                newState.letters.mistakes += 1;
            }
            return newState;
        }
        case USER_ANSWERED: {
            const newState = JSON.parse(JSON.stringify(state));
            const { positions, letters } = action.payload;
            if (positions !== undefined) {
                newState.positions.correct += positions ? 1 : 0;
                newState.positions.mistakes += positions ? 0 : 1;
            } if (letters !== undefined) {
                newState.letters.correct += letters ? 1 : 0;
                newState.letters.mistakes += letters ? 0 : 1;
            }
            return newState;
        }
        case GAME_START: {
            return initialScore;
        }
        default: return state;
    }
}