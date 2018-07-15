import { AUDIO_PLAYED, ROUND_START } from '../actions/types';

export default (state = false, action) => {
    switch (action.type) {
        case AUDIO_PLAYED:
            return true;
        case ROUND_START:
            return false;
        default:
            return state;
    }
}