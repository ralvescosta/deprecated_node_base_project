import { RegisterUserUsecase } from './application'
import { RegisterUserRepository, Hasher, adaptRoute } from './infrastructure'
import { SigninController } from './interfaces'

const hasher = new Hasher()
const repository = new RegisterUserRepository()
const usecase = new RegisterUserUsecase(repository, hasher)
const controller = new SigninController(usecase)

export const signupRoute = adaptRoute(controller)
