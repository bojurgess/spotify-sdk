import { SpotifySDK } from '../dist/index.js';
const sdk = new SpotifySDK();

import * as dotenv from 'dotenv';
dotenv.config();

const accessToken = process.env.SPOTIFY_ACCESS_TOKEN;
const baseUrl = process.env.SPOTIFY_BASE_URL;

sdk.init(accessToken, baseUrl);

export default sdk;
