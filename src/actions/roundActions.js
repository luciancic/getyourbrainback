import { AUDIO_PLAYED, ROUND_START, ROUND_END, USER_ANSWERED } from './types';

export const startRound = () => (dispatch, getState) => {
    
    // Possible minor optimisation: cache n and only fetch it again if the settings change
    
    const {n} = getState().settings;

    dispatch({
        type: ROUND_START,
        payload: n
    })
};

export const endRound = () => (dispatch, getState) => {
    const state = getState();
    const { n } = state.settings;
    const { positions, letters, answered } = state.game;

    const positionMissed = !answered.positions && positions[0] === positions[n];
    const letterMissed = !answered.letters && letters[0] === letters[n]

    dispatch({
        type: ROUND_END,
        payload: {
            positionMissed,
            letterMissed
        }
    });
};

export const answer = (stimulusChosen) => (dispatch, getState) => {
    const state = getState();
    if (stimulusChosen !== 'positions' && stimulusChosen !== 'letters') {
        throw new Error('invalid stimulus chosen');
    }
    
    // Do nothing if it was already answered or if less than n rounds elapsed
    const { answered } = state.game;
    if ( (stimulusChosen === 'positions' && answered.positions ) ||
         (stimulusChosen === 'letters'   && answered.letters   ) ||
         (state.game.currentRound <= state.settings.n ) || !state.game.roundActive ) {
        return
    }

    const { n } = state.settings;
    const array = state.game[stimulusChosen];
    const answerCorrect = array[0] === array[n];

    dispatch({
        type: USER_ANSWERED,
        payload: {
            stimulusChosen,
            answerCorrect
        }
    });
};

export const playAudio = () => ({
    type: AUDIO_PLAYED
})