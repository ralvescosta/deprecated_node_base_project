import bcrypt from 'bcryptjs'

import { HasherError, IHasher } from '../../application'

import { Either, left, right } from '../../../core/business'

export class Hasher implements IHasher {
  public async hash (data: string): Promise<Either<HasherError, string>> {
    try {
      const digest = await bcrypt.hash(data, 8)
      return right(digest)
    } catch (err) {
      console.log('SIGNUP MODULE - HASH ERR', err)
      return left(new HasherError())
    }
  }
}
