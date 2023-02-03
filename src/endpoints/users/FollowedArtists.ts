import { Endpoint } from '../../endpoint.js'

export class FollowedArtists extends Endpoint {
  private endpoint: string = 'me/following'

  public async get(): Promise<any> {
    return this.fetchData(this.endpoint, new URLSearchParams({
      type: 'artist'
    }))
  }
}