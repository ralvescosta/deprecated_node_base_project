import dbConnection from '../core/infrastructure/database'
import { HashCompare, JwtCreateToken, UserRepository, RouteAdapt } from './infrastructure'
import { UserSignInUsecase } from './application'
import { SigninController } from './interfaces'

const jwtCreate = new JwtCreateToken()
const hashCompare = new HashCompare()
const repository = new UserRepository(dbConnection)
const userCase = new UserSignInUsecase(repository, hashCompare, jwtCreate)
const signinController = new SigninController(userCase)
export const signinRoute = RouteAdapt(signinController)
