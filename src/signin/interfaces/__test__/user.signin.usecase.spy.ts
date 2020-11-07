import { BaseError, Either, right } from '../../../core/business'
import { IUserSignInUsecase, Session } from '../../business'

export class UserSignInUsecaseSpy implements IUserSignInUsecase {
  public session: Either<any, Session>;

  constructor () {
    const session = Session.create({ name: 'name', email: 'email', accessToken: 'token' })
    this.session = session
  }

  public async createSession (params: any): Promise<Either<BaseError, Session>> {
    return this.session
  }
}
