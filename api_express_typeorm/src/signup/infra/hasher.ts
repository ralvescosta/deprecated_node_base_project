import bcrypt from 'bcryptjs'

import { IHasher } from '../data/protocols/hasher.interface'

export class Hasher implements IHasher {
  constructor (
    private readonly HASH_SALT: number
  ) {}

  public async hash (text: string): Promise<string> {
    const hashed = await bcrypt.hash(text, this.HASH_SALT)
    return hashed
  }
}
