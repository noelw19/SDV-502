const subtract = require('./subtract.js');

test('properly subtracting', () => {
    expect(subtract(5, 10)).toBe(5);
})
test('properly subtracting 1', () => {
    expect(subtract(5, 2)).toBe(3);
})