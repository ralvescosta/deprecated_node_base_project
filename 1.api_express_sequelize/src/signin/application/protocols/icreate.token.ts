import { Either } from '../../../core/business'

export interface IJwtCreateToken {
  sign: (data: object) => Promise<Either<any, string>>
}
