import { Router } from 'express'
import { SignUpController } from './signup.controller'

const signUpRoute = Router()

const signUpController = new SignUpController()

signUpRoute.post('/', signUpController.create)

export { signUpRoute }
