import { HttpRequest, HttpResponse, badRequest, unsupportedMediaType, serverError, created } from '../../../core/adapters/http.adapt'
import { ISignUp } from 'signup/bussiness/usecases/signup.usescase'
import { Controller } from 'core/adapters/controllers'

export class SignUpController implements Controller {
  constructor (
    private signUpService: ISignUp
  ) {}

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
      return serverError({ body: {} })
    }
  }
}
