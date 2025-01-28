import test from 'node:test'
import { ErrorsPrinter } from '@japa/errors-printer'
import { assert } from 'chai'
import { sum } from './index.js'

test.describe('setup', () => {
  test('sum two numbers', async () => {
    try {
      assert.equal(sum(2, 2), 5)
    } catch (error) {
      await new ErrorsPrinter().printError(error)
    }
  })
})