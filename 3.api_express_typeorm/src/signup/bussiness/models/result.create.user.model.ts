export class ResultCreateUserModel {
  constructor (
    public id: number,
    public name: string,
    public email: string,
    public accessToken: string
  ) {}
}
