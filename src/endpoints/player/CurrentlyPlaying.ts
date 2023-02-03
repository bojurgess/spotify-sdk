import { Endpoint } from '../../endpoint.js'

export class CurrentlyPlaying extends Endpoint {
  private endpoint: string = 'me/player/currently-playing'

  public get(): Promise<any> {
    return this.fetchData(this.endpoint)
  }
}