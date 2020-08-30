import { ICreateToken } from '../protocols/create.token'

export class CreateTokenSpy implements ICreateToken {
  public data: object;
  public jwt = 'some_jwt'

  sign (data: object): string {
    this.data = data
    return this.jwt
  };
}
