import { Either } from '../../../core/business'
import { UserEntity } from '../../business'

export interface IUserRepository {
  findByEmail: (email: string) => Promise<Either<any, UserEntity | undefined>>
}
