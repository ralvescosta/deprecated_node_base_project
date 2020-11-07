import { UserDTO } from 'signup/business/entities/user.dto'
import { Either, right } from '../../../core/business'
import { RepositoryError } from '../errors/repository.error'

import { IRegisterUserRepository } from '../protocols/iregister.user.repository'

export class RegisterUserRepositorySpy implements IRegisterUserRepository {
  public async exists (email: string): Promise<Either<RepositoryError, boolean>> {
    return right(false)
  }

  public async create (props: UserDTO): Promise<Either<RepositoryError, boolean>> {
    return right(true)
  }
}
