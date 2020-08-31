import { HttpRequest, HttpResponse, badRequest, unsupportedMediaType, serverError, conflict, created } from '../../../core/adapters/http.adapt'
import { Controller } from '../../../core/adapters/controllers'
import { AppErrors } from '../../../core/adapters/errors.enum'
import { ISignUp } from '../../bussiness/usecases/signup.usescase'

export class SignUpController implements Controller {
  constructor (private signUpService: ISignUp) {}

  public async handle (httpRequest: HttpRequest): Promise<HttpResponse> {
    if (!httpRequest.body || !Object.keys(httpRequest.body).length) {
      return badRequest({ body: {} })
    }

    const { name, email, password } = httpRequest.body

    if (!name || !email || !password) {
      return unsupportedMediaType({ body: {} })
    }

    try {
      const user = await this.signUpService.createUser(httpRequest.body)
      return created(user)
    } catch (err) {
      switch (err.name) {
        case AppErrors.ALREADY_EXIST_ERROR:
          return conflict({ body: {} })
        default:
          return serverError({ body: {} })
      }
    }
  }
}
