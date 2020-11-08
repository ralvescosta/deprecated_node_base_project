import { Either, left, right, BaseError } from '../../../core/business'

import { UserEntity } from '../../business'
import { IUserRepository, RepositoryError } from '../../application'
import { QueryTypes } from 'sequelize'

export class UserRepository implements IUserRepository {
  constructor (private readonly _dbConnection: any) {}

  public async findByEmail (email: string): Promise<Either<BaseError, UserEntity | undefined>> {
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
      if (!user.length) {
        return right(undefined)
      }
      const userEntity: Either<BaseError, UserEntity> = UserEntity.create({
        id: user[0].id,
        name: user[0].name,
        email: user[0].email,
        password: user[0].password,
        createdAt: user[0].created_at,
        updatedAt: user[0].updated_at
      })
      if (userEntity.isLeft()) {
        return left(userEntity.value)
      }
      return right(userEntity.value)
    } catch (err) {
      console.log('SIGNUP MODULE - REPOSITORY.EXISTS ERR', err)
      return left(new RepositoryError())
    }
  }
}
