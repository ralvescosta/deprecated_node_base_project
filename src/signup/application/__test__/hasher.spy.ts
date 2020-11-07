import { Either, right } from '../../../core/business'
import { HasherError } from '../errors/hasher.error'

import { IHasher } from '../protocols/ihasher'

export class HasherSpy implements IHasher {
  public async hash (data: string): Promise<Either<HasherError, string>> {
    return right('password_hashed')
  }
}
