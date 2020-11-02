// Тест написан для примера

const log = require('../libs/log');

log("tests are in src/tests/*.test.js");

const sum = (a,b) => a + b;

test('Example: 1 + 2 = 3', () => {
    expect(sum(1, 2)).toBe(3);
});