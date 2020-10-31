import { Either, left, right, BaseError } from '../../../core/business'

import { UserEntity } from '../../business'
import { IUserRepository } from '../../application'

export class UserRepository implements IUserRepository {
  public async findByEmail (email: string): Promise<Either<BaseError, UserEntity>> {
    const user: Either<BaseError, UserEntity> = UserEntity.create({
      id: 1,
      name: 'userName',
      email: 'email@email.com',
      password: 'password',
      createdAt: '2020-10-30T23:28:22.009Z',
      updatedAt: '2020-10-30T23:28:22.009Z'
    })
    if (user.isLeft()) {
      return left(user.value)
    }

    return right(user.value)
  }
}
