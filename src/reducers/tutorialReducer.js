import { TUTORIAL_NEXT, TUTORIAL_PREVIOUS, TUTORIAL_START } from '../actions/types';

const initialState = {
    page: 1
}

export default (state = initialState, action) => {
    switch (action.type) {
        case TUTORIAL_START: {
            return initialState
        }
        case TUTORIAL_NEXT: {
            return Object.assign({}, state, { page: state.page + 1 })
        }
        case TUTORIAL_PREVIOUS: {
            return Object.assign({}, state, { page: state.page - 1 })
        }
        default: return state;
    }
} 