export class UserSession {
  constructor (
    private readonly id: number,
    private readonly name: string,
    private readonly email: string,
    private readonly accessToken: string
  ) {}
}
