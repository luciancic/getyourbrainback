import { ROUND_START, ROUND_END, USER_ANSWERED } from './types';

export const startRound = (position, letter) => ({
    type: ROUND_START,
    payload: { position, letter }
});

export const endRound = (missedResponses) => ({
    type: ROUND_END,
    payload: missedResponses
});

export const answer = (answer) => ({
    type: USER_ANSWERED,
    payload: answer
});