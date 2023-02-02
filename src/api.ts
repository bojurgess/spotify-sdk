export class Api {
  private baseUrl: string;
  private market: string;

  constructor(baseUrl: string, market: string) {
    this.baseUrl = baseUrl;
    this.market = market;
  }

  public setBaseUrl(baseUrl: string) {
    this.baseUrl = baseUrl;
  }

  public getBaseUrl(): string {
    return this.baseUrl;
  }

  public setMarket(market: string) {
    this.market = market;
  } 

  public getMarket(): string {
    return this.market;
  }
}