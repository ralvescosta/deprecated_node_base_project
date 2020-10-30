import bcrypt from 'bcryptjs'
import { promisify } from 'util'

import { HasherError, IHasher } from '../../application'

import { Either, left, right } from '../../../core/business'

export class Hasher implements IHasher {
  public async hash (data: string): Promise<Either<HasherError, string>> {
    const toPromise = promisify(bcrypt.hash)

    try {
      const digest = await toPromise(data, 8)
      return right(digest)
    } catch (err) {
      console.log('SIGNIN MODULE - HASH ERR', err)
      return left(new HasherError())
    }
  }
}
