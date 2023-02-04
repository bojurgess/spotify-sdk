import sdk from '../init.js'
import { assert, expect, test } from 'vitest'

test ('getUser', async () => {
  const data = await sdk.getUser()
  expect(data).toBeTruthy()
})