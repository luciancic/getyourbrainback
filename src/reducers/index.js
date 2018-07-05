import { combineReducers } from 'redux';
import feedbackReducer from './feedbackReducer';
import gameReducer from './gameReducer';
import roundReducer from './roundReducer';
import scoreReducer from './scoreReducer';
import settingsReducer from './settingsReducer';

export default combineReducers({
    feedback: feedbackReducer,
    game: gameReducer,
    round: roundReducer,
    score: scoreReducer,
    settings: settingsReducer
})