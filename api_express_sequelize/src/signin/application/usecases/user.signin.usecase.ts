import { BaseError, Either, left, right } from '../../../core/business'

import { IUserSignIn, Session, UserEntity } from '../../business'

import { NotFoundError } from '../errors/not.found.error'
import { WrongPasswordError } from '../errors/wrong.password.error'

import { IJwtCreateToken } from '../protocols/icreate.token'
import { IHashCompare } from '../protocols/ihash.compare'
import { IUserRepository } from '../protocols/iuser.repository'

export class UserSignInUsecase implements IUserSignIn {
  constructor (
    private readonly _userRepository: IUserRepository,
    private readonly _hashCompare: IHashCompare,
    private readonly _createToken: IJwtCreateToken
  ) {}

  public async createSession (params: any): Promise<Either<BaseError, Session>> {
    const user: Either<BaseError, UserEntity | undefined> = await this._userRepository.findByEmail(params.email)
    if (user.isLeft()) {
      return left(user.value)
    }

    if (!user.value) {
      return left(new NotFoundError())
    }

    const compared: Either<BaseError, boolean> = await this._hashCompare.compare(params.password, user.value.passwordHash)
    if (compared.isLeft()) {
      return left(compared.value)
    }

    if (!compared.value) {
      return left(new WrongPasswordError())
    }

    const accessToken = await this._createToken.sign({ id: user.value.id })
    if (accessToken.isLeft()) {
      return left(accessToken.value)
    }

    const session = Session.create({ name: user.value.name.value, email: user.value.email.value, accessToken: accessToken })
    if (session.isLeft()) {
      return left(session.value)
    }

    return right(session.value)
  }
}
