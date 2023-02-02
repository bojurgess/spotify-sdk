import { Auth } from './auth.js'
import { Api } from './api.js'
import { CurrentlyPlaying } from './endpoints/currentlyPlaying.js'

export class SpotifySDK {
  private auth: Auth;
  private api: Api;
  private accessToken: string;
  private baseUrl: string;
  private market: string;

  currentlyPlaying: CurrentlyPlaying;

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
  }

  public getNowPlaying(): Promise<any> {
    return this.currentlyPlaying.get();
  }
}

const accessToken = 'BQDwnszctplKI3C5yK_F3cQ1UBXAKiT0R-hk0OTXqfjlYfeVfr-IcR9KT6F4eMEebhtBV3Q7AF305eGSfOLSls815hR19IFlz9S-e4Pr-EJSHmHKJq64HmCGblsFBbKV4Ey1Yfs1W0_IxKQGeXL73Ma5AvyYhzZSZwlPKP6N1WppbKtN-P8zLrDD05DdPfAo746lJU8-J6dpLw'
const baseUrl = 'https://api.spotify.com/v1'

const sdk = new SpotifySDK()

sdk.init(accessToken, baseUrl).then(() => {
  console.log('SDK initialized')

  sdk.getNowPlaying().then((data) => {
    console.log(data)
  })
})