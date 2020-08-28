import knex from '../../../../core/infra/database'
import UsersTable from '../tables/users.table'
import { IUserSignUpRepository } from '../../../application/protocols/user.signup.repository'
import { CreateUserModel } from '../../../bussiness/models/create.user.model'

export class UserSignUpRepository implements IUserSignUpRepository {
  public async findByEmail (email: string): Promise<any> {
    const user = await knex<UsersTable>('users').where({ email })
    return user[0]
  }

  public async create (model: CreateUserModel): Promise<any> {
    /**
     * Knex on SQLite3 dont support returning
     */
    knex('users').insert<UsersTable>(model).returning('*').then(name=> {
      console.log(name)
    })
    return model
  }
}
