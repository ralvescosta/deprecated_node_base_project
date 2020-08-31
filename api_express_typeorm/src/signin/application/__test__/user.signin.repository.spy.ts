import { UserDatasource } from '../datasources/user.datasource'
import { IUserSignInRepository } from '../protocols/user.signin.repository'

export class UserSignInRepositorySpy implements IUserSignInRepository {
  public email: string;
  public user = new UserDatasource(1, 'name', 'email', 'password', new Date(), new Date())

  public async findByEmail (email: string): Promise<undefined | UserDatasource> {
    this.email = email
    return this.user
  }
}
