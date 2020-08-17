import { IController } from '../../core/interfaces/controller.interface'
import { HttpResponse, HttpRequest, conflict, serverError, created, unsupportedMediaType } from '../../core/adapters/http.adapt'

import { UserSignUpModel } from '../domain/user.signup.model'

import { IUserSignUpRepository } from './protocols/user.signup.repository.interface'
import { IHasher } from './protocols/hasher.interface'

export class SignUpController implements IController {
  constructor (
    private readonly userSignUpRepository: IUserSignUpRepository,
    private readonly hasher: IHasher
  ) {}

  public async handle (httpRequest: HttpRequest<UserSignUpModel>): Promise<HttpResponse> {
    const body = httpRequest.body

    if (!httpRequest.body) {
      return unsupportedMediaType({ body: { message: 'Unsupported Media Type' } })
    }

    if (!body.email || !body.password) {
      return unsupportedMediaType({ body: { message: 'Unsupported Media Type' } })
    }

    const isUserAlreadyExist = await this.userSignUpRepository.findByEmail(body.email)

    if (isUserAlreadyExist) {
      return conflict({ body: { message: 'Email Already Exist' } })
    }

    const password = await this.hasher.hash(body.password)

    try {
      await this.userSignUpRepository.createUser({ name: body.name, email: body.email, password })
      return created({})
    } catch (e) {
      return serverError({ body: { message: 'Internal Server Error' } })
    }
  }
}
