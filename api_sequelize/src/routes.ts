import { Router } from 'express'
import { SignInController } from './signup/signup.controller'

const routes = Router()

const signInController = new SignInController()
routes.post('/signup', signInController.create)

export { routes }
