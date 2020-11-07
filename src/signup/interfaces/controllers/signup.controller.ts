import { HasherError, RepositoryError } from '../../application'

import { IBaseController } from '../../../core/interfaces'
import { HttpRequest, HttpResponse, created, badRequest, conflict, internalServerError } from '../../../core/infrastructure'

import { AlreadyExistError, InvalidEmailError, InvalidNameError, InvalidPasswordError, IRegisterUserUsecase } from '../../business'

export class SignupController implements IBaseController {
  constructor (
    private readonly _usecase: IRegisterUserUsecase
  ) {}

  public async handle (request: HttpRequest): Promise<HttpResponse> {
    const body = request.body

    if (!body) {
      return badRequest({})
    }

    if (!body.name || !body.email || !body.password) {
      return badRequest({ body: { message: 'email: string, body: string, password: string, are required' } })
    }

    const result = await this._usecase.register(body)
    if (result.isRight()) {
      return created({})
    }

    if (result.value instanceof (HasherError || RepositoryError)) {
      return internalServerError({})
    }
    if (result.value instanceof AlreadyExistError) {
      return conflict({ body: { message: 'Email Already registered' } })
    }
    if (result.value instanceof InvalidEmailError) {
      return badRequest({ body: { message: 'Wrong email format' } })
    }
    if (result.value instanceof InvalidNameError) {
      return badRequest({ body: { message: 'Wrong name format' } })
    }
    if (result.value instanceof InvalidPasswordError) {
      return badRequest({ body: { message: 'Wrong password format' } })
    }
    return badRequest({})
  }
}
