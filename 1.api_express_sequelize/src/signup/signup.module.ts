import dbConnection from '../core/infrastructure/database'
import { RegisterUserUsecase } from './application'
import { RegisterUserRepository, Hasher, RouteAdapt } from './infrastructure'
import { SignupController } from './interfaces'

const hasher = new Hasher()
const repository = new RegisterUserRepository(dbConnection)
const usecase = new RegisterUserUsecase(repository, hasher)
const signUpController = new SignupController(usecase)
export const signupRoute = RouteAdapt(signUpController)
