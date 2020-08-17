import { Router } from 'express'

import { SignUpController } from './signup/signup.controller'
import { SignInController } from './signin/signin.controller'

const routes = Router()

const signUpController = new SignUpController()
routes.post('/signup', signUpController.create)

const signInController = new SignInController()
routes.post('/signin', signInController.create)

export { routes }
