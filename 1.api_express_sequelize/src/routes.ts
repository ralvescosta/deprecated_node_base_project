import { Router } from 'express'

import { signUpController } from './signup/signup.module'
import { signinRoute } from './signin/signin.module'

const routes = Router()

routes.post('/signup', (req, res) => signUpController.execute(req, res))
routes.post('/signin', (req, res) => signinRoute(req, res))

export { routes }
