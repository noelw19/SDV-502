const clone = require('./clone.js')

test('successful clone', () => {
    let arr = [1, 2, 3, 4, 5]
    expect(clone(arr)).toEqual(arr)
})