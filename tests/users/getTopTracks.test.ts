import sdk from '../init.js'
import { assert, expect, test } from 'vitest'

test ('getTopTracks', async () => {
  const data = await sdk.getUserTop()
  expect(data).toBeTruthy()
})