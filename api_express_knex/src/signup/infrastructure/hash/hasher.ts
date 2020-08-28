import { IHasher } from 'signup/application/protocols/hasher'
import bcryptjs from 'bcryptjs'

export class Hasher implements IHasher {
  constructor (private hashSalt: number) {}

  public async hash (text: string): Promise<string> {
    return bcryptjs.hash(text, this.hashSalt)
  }
}
