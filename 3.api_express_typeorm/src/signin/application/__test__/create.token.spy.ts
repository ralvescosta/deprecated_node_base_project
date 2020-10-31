import { ICreateToken } from '../protocols/create.token'

export class CreateTokenSpy implements ICreateToken {
  public data: object;
  public result = 'token'

  public sign (data: object) {
    this.data = data
    return this.result
  }
}
