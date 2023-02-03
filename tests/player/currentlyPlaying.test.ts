import sdk from '../init.js'
import { assert, expect, test } from 'vitest'

test ('getCurrentlyPlaying', async () => {
  const data = await sdk.getNowPlaying()
  expect(data).toBeTruthy()
})