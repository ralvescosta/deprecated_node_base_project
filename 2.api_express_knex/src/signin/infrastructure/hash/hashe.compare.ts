import bcryptjs from 'bcryptjs'
import { IHashCompare } from '../../application/protocols/hashe.compare'

export class HasheCompare implements IHashCompare {
  public async compare (original: string, hash: string): Promise<boolean> {
    return bcryptjs.compare(original, hash)
  }
}
