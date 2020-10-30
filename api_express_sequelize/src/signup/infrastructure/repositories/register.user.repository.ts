import { IRegisterUserRepository, RepositoryError } from '../../application'
import { UserEntity } from '../../business'

import { Either, left, right } from '../../../core/business'

export class RegisterUserRepository implements IRegisterUserRepository {
  public async exists (email: string): Promise<Either<RepositoryError, boolean>> {
    return right(true)
  }

  public async create (props: UserEntity): Promise<Either<RepositoryError, boolean>> {
    return right(true)
  }
}
