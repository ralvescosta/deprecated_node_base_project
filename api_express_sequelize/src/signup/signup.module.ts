import { RegisterUserUsecase } from './application'
import { RegisterUserRepository, Hasher } from './infrastructure'
import { SigninController } from './interfaces'

import { adaptRoute } from '../core/infrastructure'

const hasher = new Hasher()
const repository = new RegisterUserRepository()
const usecase = new RegisterUserUsecase(repository, hasher)
const controller = new SigninController(usecase)

export const signupRoute = adaptRoute(controller)
