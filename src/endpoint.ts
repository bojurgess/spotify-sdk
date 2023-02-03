export class Endpoint {
  baseUrl: string;
  accessToken: string;

  constructor(baseUrl: string, accessToken: string) {
    this.baseUrl = baseUrl;
    this.accessToken = accessToken;
  }

  async fetchData(endpoint: string, query?: URLSearchParams): Promise<any> {
    console.log(`${this.baseUrl}/${endpoint}?${query}`)
    return await fetch(`${this.baseUrl}/${endpoint}?${query}`, {
      headers: {
        Authorization: `Bearer ${this.accessToken}`,
      },
    })
      .then((response) => response.json())
      .catch((error) => console.error(error));
  }
}