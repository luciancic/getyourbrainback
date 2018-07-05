// These contain hard-coded values because it's 
// a good enough solution for this context.

export function getRandomNumber() {
    return Math.floor(Math.random() * (9) + 1);
}

export function overrideRandom() {
    return Math.random() < 0.25;
}