import { TUTORIAL_NEXT, TUTORIAL_PREVIOUS, TUTORIAL_START, TUTORIAL_EXIT } from '../actions/types';

const initialState = {
    running: false,
    page: 1
}

export default (state = initialState, action) => {
    switch (action.type) {
        case TUTORIAL_START: {
            return Object.assign({}, state, { running: true })
        }
        case TUTORIAL_NEXT: {
            return Object.assign({}, state, { page: state.page + 1 })
        }
        case TUTORIAL_PREVIOUS: {
            return Object.assign({}, state, { page: state.page - 1 })
        }
        case TUTORIAL_EXIT: {
            return Object.assign({}, state, { running: false })
        }
        default: return state;
    }
} 