const { expect } = require('@jest/globals')
const multiply = require('./multiply')

test('Giving the wrong value to the expect result of the multiplication test', () => {
  expect(
    multiply(3, 3)
  ).toBe(10)
})