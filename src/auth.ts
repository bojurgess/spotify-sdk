export class Auth {
  private accessToken: string;

  public setAccessToken(accessToken: string) {
    this.accessToken = accessToken;
  }

  public getAccessToken(): string {
    return this.accessToken;
  }
}