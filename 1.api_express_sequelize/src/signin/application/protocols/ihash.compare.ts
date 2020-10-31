import { Either } from '../../../core/business'

export interface IHashCompare {
  compare: (original: string, hash: string) => Promise<Either<any, boolean>>
}
