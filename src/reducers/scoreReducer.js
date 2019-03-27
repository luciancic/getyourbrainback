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
            const { positionMissed, letterMissed } = action.payload;
            
            let newState = JSON.parse(JSON.stringify(state));
            newState.positions.mistakes += positionMissed ? 1 : 0;
            newState.letters.mistakes += letterMissed ? 1 : 0;
            return newState;
        }
        case USER_ANSWERED: {
            // return newState;
            const { stimulusChosen, answerCorrect } = action.payload;

            // Create deep clone;
            let newState = JSON.parse(JSON.stringify(state));
            newState[stimulusChosen].correct += answerCorrect ? 1 : 0;
            newState[stimulusChosen].mistakes += !answerCorrect ? 1 : 0;
            return newState;
        }
        case GAME_START: {
            return initialScore;
        }
        default: return state;
    }
}