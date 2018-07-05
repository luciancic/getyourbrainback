import { GAME_START, GAME_END, GAME_CANCEL, ROUND_START, ROUND_END } from '../actions/types';
import { getRandomNumber, overrideRandom } from '../utils';

const initialState = {
    positions: [],
    letters: [],
    currentRound: 0,
    roundActive: false,
    ended: true
}

export default (state = initialState, action) => {
    switch (action.type) {
        case GAME_START: {
            return Object.assign({}, state, { ended: false });
        }
        case ROUND_START: {
            const { position, letter } = action.payload;
            // If we do not use overrideRandom, there would be a 1/9 chance to match.
            // That's too low. A player could play a game with 0 matches and that's boring.
            // That's why we override the randomness and force-return a match 25% of the time.
            const newPosition = position && overrideRandom() ? position : getRandomNumber();
            const newLetter = letter && overrideRandom() ? letter : getRandomNumber();

            return Object.assign({}, state, {
                roundActive: true,
                currentRound: state.currentRound + 1,
                positions: [newPosition, ...state.positions],
                letters: [newLetter, ...state.letters]
            });
        }
        case ROUND_END: {
            return Object.assign({}, state, { roundActive: false });
        }
        case GAME_END: {
            return Object.assign({}, state, { ended: true });
        }
        case GAME_CANCEL: {
            return Object.assign({}, state, { ended: true });
        }
        default: return state;
    }
}