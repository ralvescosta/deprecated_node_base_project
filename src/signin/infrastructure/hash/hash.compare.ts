import bcrypt from 'bcryptjs'

import { Either, left, right, BaseError } from '../../../core/business'
import { IHashCompare } from '../../application'

export class HashCompare implements IHashCompare {
  public async compare (original: string, hash: string): Promise<Either<BaseError, boolean>> {
    try {
      const result = await bcrypt.compare(original, hash)
      return right(result)
    } catch (err) {
      console.log('SIGNIN MODULE - HASH COMPARE ERR', err)
      return left(new Error(''))
    }
  }
}
