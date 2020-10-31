import { ICreateToken } from '../../application/protocols/create.token'

import JWT from 'jsonwebtoken'

export class JWTSign implements ICreateToken {
  constructor (
    private jwtSecrete: string,
    private jwtKeepLive?: string
  ) {}

  sign (data: object): string {
    const token = JWT.sign(data, this.jwtSecrete, { expiresIn: this.jwtKeepLive })
    return token
  }
}
