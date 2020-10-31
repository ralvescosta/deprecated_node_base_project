import { IRegisterUserRepository, RepositoryError } from '../../application'
import { UserDTO } from '../../business'

import { Either, left, right } from '../../../core/business'

export class RegisterUserRepository implements IRegisterUserRepository {
  public async exists (email: string): Promise<Either<RepositoryError, boolean>> {
    return right(false)
  }

  public async create (props: UserDTO): Promise<Either<RepositoryError, boolean>> {
    return right(true)
  }
}
