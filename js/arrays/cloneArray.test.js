const { expect } = require('@jest/globals')
const cloneArray = require('./cloneArray')

test('properly clone array', () => {
  const array = [1,2,3,4,5,6]
  
  
  /**
   * the values of the arrays are the the same but the difference is that they're in 
   * different memory addresses that why we used 'toEqual' instead of 'toBe'
   * 
   * .toBe(array)
  **/
  expect(cloneArray(array)).toEqual(array)
  /**
   * Were wanna make sure that were making a exact copy and not a exact same array  
  **/
  expect(cloneArray(array)).not.toBe(array)
})
