import { ISignIn } from '../../bussiness/usecases/signin.usecases'
import { ISignInModel } from '../../bussiness/models/signin.model'
import { UserSession } from '../../bussiness/models/user.session'
import { PasswordWrongError } from '../../bussiness/errors/password.wrong.error'
import { NotFoundError } from '../../bussiness/errors/not.found.error'

import { IUserSignInRepository } from '../protocols/user.signin.repository'
import { IHashCompare } from '../protocols/hashe.compare'
import { ICreateToken } from '../protocols/create.token'

export class UserSignIn implements ISignIn {
  constructor (
    private readonly signInRepository: IUserSignInRepository,
    private readonly hashCompare: IHashCompare,
    private readonly createToken: ICreateToken
  ) {}

  public async createSession (model: ISignInModel): Promise<UserSession> {
    const user = await this.signInRepository.findByEmail(model.email)

    if (!user) {
      throw new NotFoundError()
    }

    const compared = await this.hashCompare.compare(model.password, user.password)

    if (!compared) {
      throw new PasswordWrongError()
    }

    const accessToken = this.createToken.sign({ id: user.id })

    return new UserSession(user.id, user.name, user.email, accessToken)
  }
}
