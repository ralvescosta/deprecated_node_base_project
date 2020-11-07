import { Either, BaseError } from '../../../core/business'
import { User } from '../../business'

export interface IUserRepository {
  findByEmail: (email: string) => Promise<Either<BaseError, User | undefined>>
}
