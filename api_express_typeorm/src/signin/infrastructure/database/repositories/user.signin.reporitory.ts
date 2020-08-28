import { UsersTable } from '../../../../signup'
import { IUserSignInRepository } from 'signin/application/protocols/user.signin.repository'
import { getRepository } from 'typeorm'

export class UserSignInRepository implements IUserSignInRepository {
  public async findByEmail (email: string): Promise<any> {
    const userRepository = getRepository<UsersTable>(UsersTable)
    const user = await userRepository.findOne({ where: { email } })
    return user
  }
}
