import { TUTORIAL_NEXT, TUTORIAL_PREVIOUS, TUTORIAL_START } from './types';

export const startTutorial = () => ({
    type: TUTORIAL_START
})

export const nextTutorial = () => ({
    type: TUTORIAL_NEXT
})

export const previousTutorial = () => ({
    type: TUTORIAL_PREVIOUS
})