import { BaseController } from '../../../core/interfaces'

import { RepositoryError, HasheCompareError, JwtError, AccessTokenError, NotFoundError, WrongPasswordError } from '../../application'
import { InvalidEmailError, InvalidPasswordError } from '../../../signup/business'
import { IUserSignIn } from '../../business'

export class SigninController extends BaseController {
  constructor (private readonly _usecase: IUserSignIn) {
    super()
  }

  public async handle (): Promise<any> {
    const body = this.req.body

    if (!body) {
      return this.badRequest()
    }

    if (!body.email || !body.password) {
      return this.badRequest({ message: 'email: string, body: string, password: string, are required' })
    }

    const result = await this._usecase.createSession(body)
    if (result.isRight()) {
      return this.success(this.res, result.value)
    }

    if (result.value instanceof (RepositoryError || HasheCompareError || JwtError || AccessTokenError)) {
      return this.internalServerError('')
    }
    if (result.value instanceof NotFoundError) {
      return this.notFound({ message: 'Email not registered' })
    }
    if (result.value instanceof WrongPasswordError) {
      return this.forbidden({ message: 'Wrong password' })
    }
    if (result.value instanceof InvalidEmailError) {
      return this.badRequest({ message: 'Wrong email format' })
    }
    if (result.value instanceof InvalidPasswordError) {
      return this.badRequest({ message: 'Wrong password format' })
    }
    return this.badRequest()
  }
}
