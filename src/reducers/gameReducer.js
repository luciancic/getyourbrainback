import { GAME_START, GAME_END, GAME_CANCEL, ROUND_START } from '../actions/types';

export default (state = {}, action) => {
    switch (action.type) {
        case GAME_START: {
            break
        }
        case ROUND_START: {
            break
        }
        case GAME_END: {
            break
        }
        case GAME_CANCEL: {
            break
        }
        default: return state;
    }
}