import { ISignUp } from '../../bussiness/usecases/signup.usescase'
import { CreateUserModel } from '../../bussiness/models/create.user.model'
import { ResultCreateUserModel } from '../../bussiness/models/result.create.user.model'
import { AlreadyExistError } from '../../bussiness/errors/already.exist.error'

import { IUserSignUpRepository } from '../protocols/user.signup.repository'
import { IHasher } from '../protocols/hasher'
import { ICreateToken } from '../protocols/create.token'

export class UserSignUp implements ISignUp {
  constructor (
    private readonly signUpRepository: IUserSignUpRepository,
    private readonly hasher: IHasher,
    private readonly createToken: ICreateToken
  ) {}

  public async createUser (model: CreateUserModel): Promise<ResultCreateUserModel> {
    const hasUser = await this.signUpRepository.findByEmail(model.email)

    if (hasUser) {
      throw new AlreadyExistError()
    }

    const passwordHash = await this.hasher.hash(model.password)

    const user = await this.signUpRepository.create({ ...model, password: passwordHash })
    const accessToken = this.createToken.sign({ id: user.id })

    return new ResultCreateUserModel(user.id, user.name, user.email, accessToken)
  }
}
