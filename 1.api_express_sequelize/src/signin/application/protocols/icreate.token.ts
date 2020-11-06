import { JwtError } from '../errors/jwt.error'
import { Either } from '../../../core/business'

export interface IJwtCreateToken {
  sign: (data: object) => Promise<Either<JwtError, string>>
}
