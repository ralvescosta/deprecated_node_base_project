import { HasheCompareError } from '../errors/hashe.compare.error'
import { Either } from '../../../core/business'

export interface IHashCompare {
  compare: (original: string, hash: string) => Promise<Either<HasheCompareError, boolean>>
}
