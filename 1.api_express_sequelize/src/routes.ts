import { Router } from 'express'

import { signUpController } from './signup/signup.module'
import { signinController } from './signin/signin.module'

const routes = Router()

routes.post('/signup', (req, res) => signUpController.execute(req, res))
routes.post('/signin', (req, res) => signinController.execute(req, res))

export { routes }
