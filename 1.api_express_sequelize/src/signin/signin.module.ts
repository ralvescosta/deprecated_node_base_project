import dbConnection from '../core/infrastructure/database'
import { HashCompare, JwtCreateToken, UserRepository } from './infrastructure'
import { UserSignInUsecase } from './application'
import { SigninController } from './interfaces'

const jwtCreate = new JwtCreateToken()
const hashCompare = new HashCompare()
const repository = new UserRepository(dbConnection)
const userCase = new UserSignInUsecase(repository, hashCompare, jwtCreate)
export const signinController = new SigninController(userCase)
