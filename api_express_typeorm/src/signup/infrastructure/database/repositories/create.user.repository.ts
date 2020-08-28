import { IUserSignUpRepository } from 'signup/application/protocols/user.signup.repository'
import { CreateUserModel } from 'signup/bussiness/models/create.user.model'

import UsersTable from '../tables/users.table'
import { getRepository } from 'typeorm'

export class UserSignUpRepository implements IUserSignUpRepository {
  public async findByEmail (email: string): Promise<any> {
    const userRepository = getRepository<UsersTable>(UsersTable)
    const user = await userRepository.findOne({ where: { email }, select: ['id'] })
    return user
  }

  public async create (model: CreateUserModel): Promise<any> {
    const userRepository = getRepository<UsersTable>(UsersTable)
    const user = await userRepository.save(model)
    return user
  }
}
