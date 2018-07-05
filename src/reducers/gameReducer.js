import { GAME_START, GAME_END, GAME_CANCEL, ROUND_START } from '../actions/types';

const initialState = {
    positions: [],
    letters: [],
    currentRound: 0,
    ended: true
}

export default (state = initialState, action) => {
    switch (action.type) {
        case GAME_START: {
            return Object.assign({}, state, { ended: false });
        }
        case ROUND_START: {
            // // Increment current round
            // newState.currentRound = state.currentRound + 1;
            
            // // Concat the new position and letter to beginning of they arrays.
            // const newPosition = action.payload.position;
            // const newLetter = action.payload.letter;
            // newState.positions = [newPosition, ...state.positions];
            // newState.letters = [newLetter, ...state.letters];
            
            return Object.assign({}, state, {
                currentRound: state.currentRound + 1,
                positions: [action.payload.position, ...state.positions],
                letters: [action.payload.letter, ...state.letters]
            });
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