import { HasheCompareError } from '../errors/hashe.compare.error'
import { IHashCompare } from '../protocols/ihash.compare'
import { Either, right } from '../../../core/business'

export class HashCompareSpy implements IHashCompare {
  public async compare (original: string, hash: string): Promise<Either<HasheCompareError, boolean>> {
    return right(true)
  }
}
