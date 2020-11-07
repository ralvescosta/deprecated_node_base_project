import { Router } from 'express'

import { signupRoute } from './signup/signup.module'
import { signinRoute } from './signin/signin.module'

const routes = Router()

routes.post('/signup', (req, res) => signupRoute(req, res))
routes.post('/signin', (req, res) => signinRoute(req, res))

export { routes }
