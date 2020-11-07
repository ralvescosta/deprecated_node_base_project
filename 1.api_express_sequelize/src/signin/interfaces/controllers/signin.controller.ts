import { HttpRequest, HttpResponse, success, badRequest, notFound, forbidden, internalServerError } from '../../../core/infrastructure'
import { BaseController } from '../../../core/interfaces'

import { RepositoryError, HasheCompareError, JwtError, AccessTokenError, NotFoundError, WrongPasswordError } from '../../application'
import { InvalidEmailError, InvalidPasswordError } from '../../../signup/business'
import { IUserSignInUsecase } from '../../business'

export class SigninController implements BaseController {
  constructor (
    private readonly _usecase: IUserSignInUsecase
  ) {}

  public async handle (request: HttpRequest): Promise<HttpResponse> {
    const body = request.body

    if (!body) {
      return badRequest({})
    }

    if (!body.email || !body.password) {
      return badRequest({ body: { message: 'email: string, password: string, are required' } })
    }

    const result = await this._usecase.createSession(body)
    if (result.isRight()) {
      return success({ body: result.value.toJSON() })
    }

    if (result.value instanceof (RepositoryError || HasheCompareError || JwtError || AccessTokenError)) {
      return internalServerError({})
    }
    if (result.value instanceof NotFoundError) {
      return notFound({ body: { message: 'Email not registered' } })
    }
    if (result.value instanceof WrongPasswordError) {
      return forbidden({ body: { message: 'Wrong password' } })
    }
    if (result.value instanceof InvalidEmailError) {
      return badRequest({ body: { message: 'Wrong email format' } })
    }
    if (result.value instanceof InvalidPasswordError) {
      return badRequest({ body: { message: 'Wrong password format' } })
    }
    return badRequest({})
  }
}
