import test from 'node:test'
import { assert } from 'chai'
import { sum } from './index.js'

test.describe('setup', () => {
  test('sum two numbers', () => {
    assert.equal(sum(2, 2), 4)
  })
})