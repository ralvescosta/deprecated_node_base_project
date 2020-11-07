import { IUserRepository } from '../protocols/iuser.repository'
import { Either, BaseError, right } from '../../../core/business'
import { User } from '../../business'

export class UserRepositorySpy implements IUserRepository {
  public user: User;

  constructor () {
    const user = User.create({ id: 1, name: 'name', email: 'email@email.com', password: 'password', createdAt: new Date(), updatedAt: new Date() })
    if (user.isRight()) {
      this.user = user.value
    }
  }

  public async findByEmail (email: string): Promise<Either<BaseError, User | undefined>> {
    return right(this.user)
  }
}
