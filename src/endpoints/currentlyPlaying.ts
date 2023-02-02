import { Endpoint } from '../endpoint'

export class CurrentlyPlaying extends Endpoint {
  private endpoint: string = 'me/player/currently-playing'

  public get(): Promise<any> {
    return this.fetchData(this.endpoint)
  }
}