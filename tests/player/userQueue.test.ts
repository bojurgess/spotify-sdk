import sdk from '../init.js'
import { assert, expect, test } from 'vitest'

test ('getUserQueue', async () => {
  const data = await sdk.getUserQueue()
  expect(data).toBeTruthy()
})