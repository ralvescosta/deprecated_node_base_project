import { RegisterUserUsecase } from './application'
import { RegisterUserRepository, Hasher } from './infrastructure'
import { SigninController } from './interfaces'

const hasher = new Hasher()
const repository = new RegisterUserRepository()
const usecase = new RegisterUserUsecase(repository, hasher)
const signUpController = new SigninController(usecase)

export { signUpController }
