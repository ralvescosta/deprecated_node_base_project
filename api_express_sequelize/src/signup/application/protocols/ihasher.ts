import { Either } from '../../../core/business'
import { HasherError } from '../errors/hasher.error'

export interface IHasher {
  hash: (data: string) => Promise<Either<HasherError, string>>
}
