import { Endpoint } from '../../endpoint.js'

export class User extends Endpoint {
  private endpoint: string = 'me'

  public get(): Promise<any> {
    return this.fetchData(this.endpoint)
  }
}