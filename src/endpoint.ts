export class Endpoint {
  baseUrl: string;
  accessToken: string;

  constructor(baseUrl: string, accessToken: string) {
    this.baseUrl = baseUrl;
    this.accessToken = accessToken;
  }

  fetchData(endpoint: string): Promise<any> {
    return fetch(`${this.baseUrl}/${endpoint}`, {
      headers: {
        Authorization: `Bearer ${this.accessToken}`
      },
    })
      .then((response) => response.json())
      .catch((error) => console.error(error));
  }
}