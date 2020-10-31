import { CreateUserModel } from '../../bussiness/models/create.user.model'
import { UserDatasource } from '../datasources/user.datasource'

export interface IUserSignUpRepository {
  findByEmail: (email: string) => Promise<undefined | UserDatasource>
  create: (model: CreateUserModel) => Promise<UserDatasource>
}
