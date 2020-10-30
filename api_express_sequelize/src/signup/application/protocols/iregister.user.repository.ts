import { UserDTO } from 'signup/business/entities/user.dto'
import { Either } from '../../../core/business'
import { RepositoryError } from '../errors/repository.error'

export interface IRegisterUserRepository {
  exists: (email: string) => Promise<Either<RepositoryError, boolean>>
  create: (props: UserDTO) => Promise<Either<RepositoryError, boolean>>
}
