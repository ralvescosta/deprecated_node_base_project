import { IRegisterUserRepository, RepositoryError } from '../../application'
import { UserDTO } from '../../business'

import { Either, left, right } from '../../../core/business'
import { QueryTypes } from 'sequelize'

export class RegisterUserRepository implements IRegisterUserRepository {
  constructor (
    private readonly _dbConnection: any
  ) {}

  public async exists (email: string): Promise<Either<RepositoryError, boolean>> {
    try {
      const user = await this._dbConnection.query(`
        SELECT id, name, email, password, created_at, updated_at
        FROM users
        WHERE email = ?
      `,
      {
        replacements: [email],
        type: QueryTypes.SELECT
      })
      if (user.length) {
        return right(true)
      }
      return right(false)
    } catch (err) {
      console.log('SIGNUP MODULE - REPOSITORY.EXISTS ERR', err)
      return left(new RepositoryError())
    }
  }

  public async create (props: UserDTO): Promise<Either<RepositoryError, boolean>> {
    try {
      const user = await this._dbConnection.query(`
        INSERT INTO users (name, email, password)
        VALUES (?, ?, ?)
      `,
      {
        replacements: [props.name, props.email, props.password],
        type: QueryTypes.INSERT
      })
      return right(true)
    } catch (err) {
      console.log('SIGNUP MODULE - REPOSITORY.CREATE ERR', err)
      return left(new RepositoryError())
    }
  }
}
