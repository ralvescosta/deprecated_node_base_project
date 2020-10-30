/* eslint-disable promise/param-names */
import JWT from 'jsonwebtoken'
import { Either, left, right, BaseError } from '../../../core/business'

export class JwtCreateToken {
  public async sign (data: object): Promise<Either<BaseError, string>> {
    const toPromise = (): Promise<string> => new Promise((resolve, rejects) => {
      try {
        const token = JWT.sign(data, 'secrete', { expiresIn: '8hours' })
        resolve(token)
      } catch (err) {
        rejects(err)
      }
    })

    try {
      const token = await toPromise()
      return right(token)
    } catch (err) {
      console.log('SIGNUP MODULE - JWT ERR', err)
      return left(new Error(''))
    }
  }
}
