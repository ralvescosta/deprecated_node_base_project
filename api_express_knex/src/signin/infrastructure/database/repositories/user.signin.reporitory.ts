import { UsersTable } from '../../../../signup'
import knex from '../../../../core/infra/database'
import { IUserSignInRepository } from '../../../application/protocols/user.signin.repository'

export class UserSignInRepository implements IUserSignInRepository {
  public async findByEmail (email: string): Promise<any> {
    const user = await knex<UsersTable>('users').where({ email })
    return user[0]
  }

}
