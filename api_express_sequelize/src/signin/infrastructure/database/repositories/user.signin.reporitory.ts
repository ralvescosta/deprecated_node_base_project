import { UsersTable } from '../../../../signup'
import { IUserSignInRepository } from 'signin/application/protocols/user.signin.repository'

export class UserSignInRepository implements IUserSignInRepository {
  public async findByEmail (email: string): Promise<any> {
    const user = await UsersTable.findOne({ where: { email } })
    return user
  }
}
