import { RegisterUserUsecase, HasherError, RepositoryError } from '../../application'
import { BaseController } from '../../../core/interfaces'

import { AlreadyExistError, InvalidEmailError, InvalidNameError, InvalidPasswordError, IRegisterUserUsecase } from '../../business'

export class SignupController extends BaseController {
  constructor (private readonly _usecase: IRegisterUserUsecase) {
    super()
  }

  public async handle (): Promise<any> {
    const body = this.req.body

    if (!body) {
      return this.badRequest()
    }

    if (!body.name || !body.email || !body.password) {
      return this.badRequest({ message: 'email: string, body: string, password: string, are required' })
    }

    const result = await this._usecase.register(body)
    if (result.isRight()) {
      return this.created(this.res)
    }

    if (result.value instanceof (HasherError || RepositoryError)) {
      return this.internalServerError('')
    }
    if (result.value instanceof AlreadyExistError) {
      return this.conflict({ message: 'Email Already registered' })
    }
    if (result.value instanceof InvalidEmailError) {
      return this.badRequest({ message: 'Wrong email format' })
    }
    if (result.value instanceof InvalidNameError) {
      return this.badRequest({ message: 'Wrong name format' })
    }
    if (result.value instanceof InvalidPasswordError) {
      return this.badRequest({ message: 'Wrong password format' })
    }
    return this.badRequest()
  }
}
