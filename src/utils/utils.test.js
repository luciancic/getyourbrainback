import { 
    getRandomNumber, 
    overrideRandom, 
    getFeedbackColor 
} from './index';
import { isBoolean } from 'util';

// Should generate a random number between 1 and 9 inclusively
test('get random number', () => {
    const arr = [];
    for (let i = 0; i < 20; i++) {
        arr[i] = getRandomNumber();
    }
    const containsLegalValues = arr.every(num => { return num >= 1 && num <= 9 });
    expect(containsLegalValues).toBeTruthy();
});

// Returns true 25% of the time
test('overrideRandom', () => {
    const arr = [];
    for (let i = 0; i < 20; i++) {
        arr[i] = overrideRandom();
    }
    const containsOnlyBool = arr.every(val => isBoolean(val) );
    expect(containsOnlyBool).toBeTruthy();
})

test('get feedback color', () => {
    expect(getFeedbackColor(null)).toBe('white');
    expect(getFeedbackColor('correct')).toBe('green');
    expect(getFeedbackColor('mistake')).toBe('red');
    expect(getFeedbackColor('missed')).toBe('blue');
});