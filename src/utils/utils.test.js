import { 
    getRandomNumber, 
    overrideRandom, 
    mapFeedbackColor 
} from './index'

// Should generate a random number between 1 and 9 inclusively
test('get random number', () => {
    const arr = []
    for (let i = 0; i < 20; i++) {
        arr[i] = getRandomNumber()
    }
    const containsLegalValues = arr.every(num => { return num >= 1 && num <= 9 })
    expect(containsLegalValues).toBeTruthy()
})

// Returns true 25% of the time
test('overrideRandom', () => {
    const arr = []
    for (let i = 0; i < 20; i++) {
        arr[i] = overrideRandom()
    }
    const containsOnlyBool = arr.every(val => typeof val === 'boolean')
    expect(containsOnlyBool).toBeTruthy()
})

test('map feedback color', () => {
    expect(mapFeedbackColor(null)).toBe('white')
    expect(mapFeedbackColor('correct')).toBe('green')
    expect(mapFeedbackColor('mistake')).toBe('red')
    expect(mapFeedbackColor('missed')).toBe('blue')
})