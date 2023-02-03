export class Endpoint {
  baseUrl: string;
  accessToken: string;

  constructor(baseUrl: string, accessToken: string) {
    this.baseUrl = baseUrl;
    this.accessToken = accessToken;
  }

  async fetchData(endpoint: string): Promise<any> {
    return await fetch(`${this.baseUrl}/${endpoint}`, {
      headers: {
        Authorization: `Bearer ${this.accessToken}`,
      },
    })
      .then((response) => response.json())
      .catch((error) => console.error(error));
  }
}