import { AUDIO_PLAYED, ROUND_START, ROUND_END, USER_ANSWERED } from './types';

export const startRound = () => (dispatch, getState) => {
    
    // Possible minor optimisation: cache n and only fetch it again if the settings change
    
    const {n} = getState().settings;

    dispatch({
        type: ROUND_START,
        n
    })
};

export const endRound = (missedResponses) => ({
    type: ROUND_END,
    payload: missedResponses
});

export const answer = (answer) => ({
    type: USER_ANSWERED,
    payload: answer
});

export const playAudio = () => ({
    type: AUDIO_PLAYED
})