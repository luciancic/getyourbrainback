import { combineReducers } from 'redux';
import audioReducer from './audioReducer';
import feedbackReducer from './feedbackReducer';
import gameReducer from './gameReducer';
import scoreReducer from './scoreReducer';
import settingsReducer from './settingsReducer';
import tutorialReducer from './tutorialReducer.js';

export default combineReducers({
    audioPlayed: audioReducer,
    feedback: feedbackReducer,
    game: gameReducer,
    score: scoreReducer,
    settings: settingsReducer,
    tutorial: tutorialReducer
})