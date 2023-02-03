import sdk from '../init.js'
import { assert, expect, test } from 'vitest'

test ('getTop', async () => {
  const data = await sdk.getUserTop('artists')
  expect(data).toBeTruthy()
})