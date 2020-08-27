import { ISignUp } from '../../bussiness/usecases/signup.usescase'
import { CreateUserModel } from '../../bussiness/models/create.user.model'
import { ResultCreateUserModel } from '../../bussiness/models/result.create.user.model'

import { IUserSignUpRepository } from '../protocols/user.signup.repository'
import { IHasher } from '../protocols/hasher'

export class UserSignUp implements ISignUp {
  constructor (
    private readonly signUpRepository: IUserSignUpRepository,
    private readonly hasher: IHasher
  ) {}

  public async createUser (model: CreateUserModel): Promise<ResultCreateUserModel> {
    const hasUser = await this.signUpRepository.findByEmail(model.email)

    if (hasUser) {
      throw new Error()
    }

    const passwordHash = await this.hasher.hash(model.password)

    const user = await this.signUpRepository.create({ ...model, password: passwordHash })
    return new ResultCreateUserModel(user.id, user.name, user.email, '')
  }
}
