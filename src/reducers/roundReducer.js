import { ROUND_START, ROUND_END } from '../actions/types';

export default (state = { active: true }, action) => {
    switch (action.type) {
        case ROUND_START: {
            return Object.assign({}, state, { active: true });
        }
        case ROUND_END: {
            return Object.assign({}, state, { active: false });
        }
        default: return state;
    }
}