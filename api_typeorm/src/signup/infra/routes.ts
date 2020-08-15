import { Router } from 'express'
import { SignUpController } from '../signup.controller'
import { UserSignUpRepository } from './user.signup.repository'
import { Hasher } from './hasher'
import { adaptRoute } from './adapters/express.router.adapt'

const signUnRoutes = Router()

const userSignUpRepository = new UserSignUpRepository()
const hasher = new Hasher(8)
const signUpController = new SignUpController(userSignUpRepository, hasher)

signUnRoutes.post('/', adaptRoute(signUpController))

export { signUnRoutes }
