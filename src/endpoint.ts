export class Endpoint {
  baseUrl: string;
  accessToken: string;

  constructor(baseUrl: string, accessToken: string) {
    this.baseUrl = baseUrl;
    this.accessToken = accessToken;
  }

  async fetchData(endpoint: string, query?: URLSearchParams): Promise<any> {
    if (query !== undefined) {
      return await fetch(`${this.baseUrl}/${endpoint}?${query}`, {
        headers: {
          Authorization: `Bearer ${this.accessToken}`,
        },
      })
        .then((response) => response.json())
        .catch((error) => console.error(error));
    } else {
      return await fetch(`${this.baseUrl}/${endpoint}`, {
        headers: {
          Authorization: `Bearer ${this.accessToken}`,
        },
      })
        .then((response) => response.json())
        .catch((error) => console.error(error));
    }
  }
}