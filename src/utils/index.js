// These contain hard-coded values because it's 
// a good enough solution for this context.


export function generateGameArray(rounds, n) {
    const arr = []
    const len = rounds + n

    for (let i = 0; i < len; i++) {
        if (i >= n && overrideRandom()) {
            arr[i] = arr[i - n]
        } else {
            arr[i] = getRandomNumber()
        }
    }

    return arr
}

// Should generate a random number between 1 and 9 inclusively
export function getRandomNumber() {
    return Math.floor(Math.random() * (9) + 1);
}

// Returns true 25% of the time
export function overrideRandom() {
    return Math.random() < 0.25;
}

export function mapFeedbackColor(feedback) {
    switch (feedback) {
        case null: return 'white';
        case 'correct': return 'green';
        case 'mistake': return 'red';
        case 'missed': return 'blue';
        default: break;
    }
}