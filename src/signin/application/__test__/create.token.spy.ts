import { IJwtCreateToken } from '../protocols/icreate.token'
import { JwtError } from '../errors/jwt.error'
import { Either, right } from '../../../core/business'

export class JwtCreateTokenSpy implements IJwtCreateToken {
  public async sign (data: object): Promise<Either<JwtError, string>> {
    return right('token')
  }
}
