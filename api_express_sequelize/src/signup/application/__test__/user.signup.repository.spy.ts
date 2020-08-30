import { IUserSignUpRepository } from '../protocols/user.signup.repository'
import { CreateUserModel } from '../../bussiness/models/create.user.model'
import { UserDatasource } from '../datasources/user.datasource'

export class UserSignUpRepositorySpy implements IUserSignUpRepository {
  public user = new UserDatasource(1, 'name', 'email', 'password', new Date(), new Date());

  public async create (model: CreateUserModel): Promise<UserDatasource> {
    return new UserDatasource(1, model.name, model.email, model.password, new Date(), new Date())
  }

  public async findByEmail (email: string): Promise<UserDatasource | undefined> {
    return this.user
  }
}
