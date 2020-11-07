import { BaseError, Either, right } from '../../../core/business'
import { IUserSignInUsecase, Session } from '../../business'

export class UserSignInUsecaseSpy implements IUserSignInUsecase {
  public session: Session;

  constructor () {
    const session = Session.create({ name: 'name', email: 'email', accessToken: 'token' })
    if (session.isRight()) {
      this.session = session.value
    }
  }

  public async createSession (params: any): Promise<Either<BaseError, Session>> {
    return right(this.session)
  }
}
