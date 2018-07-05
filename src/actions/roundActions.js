import { ROUND_START, ROUND_END } from './types';

export const startRound = (position, letter) => ({
    type: ROUND_START,
    payload: { position, letter }
});

export const endRound = () => ({
    type: ROUND_END
});