import { RegisterUserUsecase } from '../../application'
import { BaseController } from '../../../core/interfaces'

export class SigninController extends BaseController {
  constructor (private readonly _usecase: RegisterUserUsecase) {
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
    if (result.isLeft()) {
      return this.conflict()
    }

    return this.created(this.res)
  }
}
