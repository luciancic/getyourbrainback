import { GAME_START, GAME_END, GAME_CANCEL, ROUND_START, ROUND_END, USER_ANSWERED } from '../actions/types';
import { getRandomNumber, overrideRandom } from '../utils';

const initialState = {
    positions: [],
    letters: [],
    currentRound: 0,
    roundActive: false,
    gameRunning: false,
    answered: {
        positions: false,
        letters: false
    }
}

export default (state = initialState, action) => {
    switch (action.type) {
        case GAME_START: {
            return Object.assign({}, state, initialState, { gameRunning: true });
        }
        case ROUND_START: {
            const { n } = action.payload;
            const oldPosition = state.positions[ n - 1 ];
            const oldLetter = state.letters[ n - 1 ];
            // If we do not use overrideRandom, there would be a 1/9 chance to match.
            // That's too low. A player could play a game with 0 matches and that's boring.
            // That's why we override the randomness and force-return a match 25% of the time.
            const newPosition = oldPosition && overrideRandom() ? oldPosition : getRandomNumber();
            const newLetter = oldLetter && overrideRandom() ? oldLetter : getRandomNumber();

            return Object.assign({}, state, {
                roundActive: true,
                currentRound: state.currentRound + 1,
                positions: [newPosition, ...state.positions],
                letters: [newLetter, ...state.letters],
                answered: {
                    positions: false,
                    letters: false
                }
            });
        }
        case ROUND_END: {
            return Object.assign({}, state, { roundActive: false });
        }
        case GAME_END: {
            return Object.assign({}, state, { gameRunning: false });
        }
        case GAME_CANCEL: {
            return Object.assign({}, state, { gameRunning: false });
        }
        case USER_ANSWERED: {
            const { stimulusChosen } = action.payload;
            const newState = { 
                answered: {
                    positions: state.answered.positions,
                    letters: state.answered.letters
                }
            };
            newState.answered[stimulusChosen] = true;
            return Object.assign( {}, state, newState );
        }
        default: return state;
    }
}