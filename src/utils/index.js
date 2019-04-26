// These contain hard-coded values because it's 
// a good enough solution for this context.

// Should generate a random number between 1 and 9 inclusively
export function getRandomNumber() {
    return Math.floor(Math.random() * (9) + 1);
}

// Returns true 25% of the time
export function overrideRandom() {
    return Math.random() < 0.25;
}

export function getFeedbackColor(feedback) {
    switch (feedback) {
        case null: return 'white';
        case 'correct': return 'green';
        case 'mistake': return 'red';
        case 'missed': return 'blue';
        default: break;
    }
}