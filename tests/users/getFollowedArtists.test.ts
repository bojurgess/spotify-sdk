import sdk from '../init.js'
import { assert, expect, test } from 'vitest'

test ('getFollowedArtists', async () => {
  const data = await sdk.getFollowedArtists()
  expect(data).toBeTruthy()
})