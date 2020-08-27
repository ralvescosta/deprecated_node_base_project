import { IUserSignUpRepository } from 'signup/application/protocols/user.signup.repository'
import { CreateUserModel } from 'signup/bussiness/models/create.user.model'

import User from '../entities/user.entity'

export class UserSignUpRepository implements IUserSignUpRepository {
  public async findByEmail (email: string): Promise<any> {
    const user = await User.findOne({ where: { email } })
    return user
  }

  public async create (model: CreateUserModel): Promise<any> {
    const user = await User.create(model)
    return user
  }
}
