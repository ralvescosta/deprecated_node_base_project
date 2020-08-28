import {
  HttpRequest,
  HttpResponse,
  badRequest,
  unsupportedMediaType,
  serverError,
  notFound,
  unauthorized,
  success
} from '../../../core/adapters/http.adapt'
import { Controller } from '../../../core/adapters/controllers'
import { AppErrors } from '../../../core/adapters/errors.enum'

import { ISignIn } from '../../bussiness/usecases/signin.usecases'

export class SignInController implements Controller {
  constructor (
    private readonly signInService: ISignIn
  ) {}

  public async handle (httpRequest: HttpRequest): Promise<HttpResponse> {
    if (!httpRequest.body) {
      return badRequest({ body: {} })
    }

    const { email, password } = httpRequest.body

    if (!email || !password) {
      return unsupportedMediaType({ body: {} })
    }

    try {
      const signin = await this.signInService.createSession({ email, password })
      return success(signin)
    } catch (err) {
      switch (err.name) {
        case AppErrors.NOT_FOUND_ERROR:
          return notFound({ body: {} })
        case AppErrors.PASSWORD_WRONG_ERROR:
          return unauthorized({ body: {} })
        default:
          return serverError({ body: {} })
      }
    }
  }
}
