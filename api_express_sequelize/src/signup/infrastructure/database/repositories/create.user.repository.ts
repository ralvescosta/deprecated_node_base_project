import { IUserSignUpRepository } from 'signup/application/protocols/user.signup.repository'
import { CreateUserModel } from 'signup/bussiness/models/create.user.model'

import UsersTable from '../tables/users.table'

export class UserSignUpRepository implements IUserSignUpRepository {
  public async findByEmail (email: string): Promise<any> {
    const user = await UsersTable.findOne({ where: { email } })
    return user
  }

  public async create (model: CreateUserModel): Promise<any> {
    const user = await UsersTable.create(model)
    return user
  }
}
