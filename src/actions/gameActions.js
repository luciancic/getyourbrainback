import { GAME_START, GAME_END, GAME_CANCEL } from './types';

export const startGame = () => ({
    type: GAME_START
})

export const endGame = () => ({
    type: GAME_END
});

export const cancelGame = () => ({
    type: GAME_CANCEL
})