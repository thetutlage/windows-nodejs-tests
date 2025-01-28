import { assert } from 'chai'
import test from 'node:test'
import { ErrorsPrinter } from '@japa/errors-printer'
import { sum } from '../src/index.js'

test.describe('Errors printer', () => {
  test('print assert error', async () => {
    try {
      assert.equal(sum(2, 2), 5)
    } catch (error) {
      await new ErrorsPrinter().printError(error)
      console.log('PARSED')
      console.log(await new ErrorsPrinter().parseError(error))
    }
  })

  test('print assert error', async () => {
    try {
      assert.equal(sum(2, 2), 5)
    } catch (error) {
      await new ErrorsPrinter().printError(error)
      console.log('PARSED')
      console.log(await new ErrorsPrinter().parseError(error))
    }
  })
})
