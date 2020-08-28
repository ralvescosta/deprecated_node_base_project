import { UserDatasource } from '../datasources/user.datasource'

export interface IUserSignInRepository {
  findByEmail: (email: string) => Promise<undefined | UserDatasource>
}
