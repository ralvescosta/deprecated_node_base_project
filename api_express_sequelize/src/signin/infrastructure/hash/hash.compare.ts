import bcrypt from 'bcryptjs'

import { promisify } from 'util'
import { Either, left, right, BaseError } from '../../../core/business'

export class HashCompare {
  public async compare (original: string, hash: string): Promise<Either<BaseError, boolean>> {
    const toPromise = promisify(bcrypt.compare)

    try {
      const result = await toPromise(original, hash)
      return right(result)
    } catch (err) {
      console.log('SIGNIN MODULE - HASH COMPARE ERR', err)
      return left(new Error(''))
    }
  }
}
