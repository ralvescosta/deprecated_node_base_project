import { Either, BaseError } from '../../../core/business'
import { UserEntity } from '../../business'

export interface IUserRepository {
  findByEmail: (email: string) => Promise<Either<BaseError, UserEntity | undefined>>
}
