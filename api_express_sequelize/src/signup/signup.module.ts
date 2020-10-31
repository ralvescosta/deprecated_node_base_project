import { RegisterUserUsecase } from './application'
import { RegisterUserRepository, Hasher } from './infrastructure'
import { SignupController } from './interfaces'

const hasher = new Hasher()
const repository = new RegisterUserRepository()
const usecase = new RegisterUserUsecase(repository, hasher)
export const signUpController = new SignupController(usecase)
