import { Either, left, right, BaseError } from '../../../core/business'
import { UserDTO, User, AlreadyExistError } from '../../business'

import { IHasher } from '../protocols/ihasher'
import { IRegisterUserRepository } from '../protocols/iregister.user.repository'

export class RegisterUserUsecase {
  constructor (
    private readonly _registerUserRepository: IRegisterUserRepository,
    private readonly _hash: IHasher
  ) {}

  public async register (params: UserDTO): Promise<Either<BaseError, UserDTO>> {
    const createUser = User.create({ name: params.name, email: params.email, password: params.password })
    if (createUser.isLeft()) {
      return left(createUser.value)
    }

    const user: User = createUser.value

    const userAlreadyCreated = await this._registerUserRepository.exists(user.email.value)
    if (userAlreadyCreated.isLeft()) {
      return left(userAlreadyCreated.value)
    }

    if (userAlreadyCreated.value) {
      return left(new AlreadyExistError())
    }

    const passwordHash = await this._hash.hash(user.password?.value as string)
    if (passwordHash.isLeft()) {
      return left(passwordHash.value)
    }

    const registered = await this._registerUserRepository.create({ name: user.name.value, email: user.email.value, password: passwordHash.value })
    if (registered.isLeft()) {
      return left(registered.value)
    }

    return right(params)
  }
}
