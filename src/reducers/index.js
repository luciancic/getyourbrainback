import { combineReducers } from 'redux';
import feedbackReducer from './feedbackReducer';
import gameReducer from './gameReducer';
import scoreReducer from './scoreReducer';
import settingsReducer from './settingsReducer';

export default combineReducers({
    feedback: feedbackReducer,
    game: gameReducer,
    score: scoreReducer,
    settings: settingsReducer
})