import { HttpRequest, HttpResponse, badRequest, unsupportedMediaType, serverError, conflict, created } from '../../../core/adapters/http.adapt'
import { Controller } from '../../../core/adapters/controllers'
import { AppErrors } from '../../../core/adapters/errors.enum'
import { ISignUp } from '../../bussiness/usecases/signup.usescase'

export class SignUpController implements Controller {
  constructor (private signUpService: ISignUp) {}

  public async handle (req: HttpRequest): Promise<HttpResponse> {
    if (!req.body) {
      return badRequest({ body: {} })
    }

    const { name, email, password } = req.body

    if (!name || !email || !password) {
      return unsupportedMediaType({ body: {} })
    }

    try {
      const user = await this.signUpService.createUser(req.body)
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
