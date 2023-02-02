import { Endpoint } from '../../endpoint.js'

export class UserQueue extends Endpoint {
  private endpoint: string = 'me/player/queue'

  public get(): Promise<any> {
    return this.fetchData(this.endpoint)
  }
}