import { Endpoint } from '../../endpoint.js'

export class UserQueue extends Endpoint {
  private endpoint: string = 'me/player/queue'

  public async get(): Promise<any> {
    return this.fetchData(this.endpoint)
  }
}