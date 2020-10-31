import { BaseError, Either } from '../../../core/business'
import { Session } from '../../business'

export interface IUserSignIn {
  createSession: (params: any) => Promise<Either<BaseError, Session>>
}
