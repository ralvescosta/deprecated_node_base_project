import { RegisterUserUsecase } from '../../application'
import { HttpRequest, HttpResponse, badRequest, serverError, success } from '../../../core/business'
import { IController } from '../../../core/interfaces'

export class SigninController implements IController {
  constructor (private readonly _usecase: RegisterUserUsecase) {}
  public async handle (httpRequest: HttpRequest): Promise<HttpResponse> {
    const body = httpRequest.body
    if (!body) {
      return badRequest({ body: { message: 'Bad Request' } })
    }

    const result = await this._usecase.register(body)
    if (result.isLeft()) {
      return serverError({ body: { message: 'internal server error' } })
    }

    return success({})
  }
}
