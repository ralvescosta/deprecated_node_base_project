import { Router } from 'express'

import { SignUpController } from './signup/interfaces/controllers/signup.controller'
import { UserSignUp } from './signup/application/usecases/user.signup.usecase'
import { UserSignUpRepository } from './signup/infrastructure/database/repositories/create.user.repository'
import { Hasher } from './signup/infrastructure/hash/hasher'

import { adaptRoute } from './signup/infrastructure/adapters/express.router.adapt'

const routes = Router()

const userSignUpRepository = new UserSignUpRepository()
const hasher = new Hasher(8)
const userSignUp = new UserSignUp(userSignUpRepository, hasher)
const signUpController = new SignUpController(userSignUp)
routes.post('/signup', adaptRoute(signUpController))

// const signInController = new SignInController()
// routes.post('/signin', signInController.create)

export { routes }
