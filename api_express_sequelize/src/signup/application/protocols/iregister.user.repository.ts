import { UserEntity } from 'signup/business/entities/user.entity'
import { Either } from '../../../core/business'
import { RepositoryError } from '../errors/repository.error'

export interface IRegisterUserRepository {
  exists: (email: string) => Promise<Either<RepositoryError, boolean>>
  create: (props: UserEntity) => Promise<Either<RepositoryError, boolean>>
}
