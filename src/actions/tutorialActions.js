import { TUTORIAL_NEXT, TUTORIAL_PREVIOUS, TUTORIAL_START, TUTORIAL_EXIT } from './types';

export const startTutorial = () => ({
    type: TUTORIAL_START
})

export const exitTutorial = () => ({
    type: TUTORIAL_EXIT
})

export const nextTutorial = () => ({
    type: TUTORIAL_NEXT
})

export const previousTutorial = () => ({
    type: TUTORIAL_PREVIOUS
})