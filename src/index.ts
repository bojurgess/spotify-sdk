import { Auth } from './auth.js'
import { Api } from './api.js'
import { CurrentlyPlaying } from './endpoints/player/currentlyPlaying.js'
import { UserQueue } from './endpoints/player/UserQueue.js'

import * as dotenv from 'dotenv'
dotenv.config()

export class SpotifySDK {
  private auth: Auth;
  private api: Api;
  private accessToken: string;
  private baseUrl: string;
  private market: string;

  currentlyPlaying: CurrentlyPlaying;
  userQueue: UserQueue;

  constructor() {
    this.auth = new Auth(this.accessToken);
    this.api = new Api(this.baseUrl, this.market);
  }

  async init(accessToken: string, baseUrl: string): Promise<void> {
    this.auth.setAccessToken(accessToken);
    this.api.setBaseUrl(baseUrl);

    this.accessToken = this.auth.getAccessToken();
    this.baseUrl = this.api.getBaseUrl();

    this.currentlyPlaying = new CurrentlyPlaying(this.baseUrl, this.accessToken);
    this.userQueue = new UserQueue(this.baseUrl, this.accessToken);
  }

  public getNowPlaying(): Promise<any> {
    return this.currentlyPlaying.get();
  }

  public getUserQueue(): Promise<any> {
    return this.userQueue.get();
  }
}

const accessToken = process.env.SPOTIFY_ACCESS_TOKEN
const baseUrl = process.env.SPOTIFY_BASE_URL

const sdk = new SpotifySDK()

sdk.init(accessToken, baseUrl).then(() => {
  console.log('SDK initialized')

  sdk.getUserQueue().then((data) => {
    console.log(data)
  })
})