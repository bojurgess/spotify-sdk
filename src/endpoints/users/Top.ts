import { Endpoint } from '../../endpoint.js'

export class Top extends Endpoint {
  private endpoint: string = 'me/top'

  public get(type: string): Promise<any> {
    return this.fetchData(`${this.endpoint}/${type}`)
  }
}