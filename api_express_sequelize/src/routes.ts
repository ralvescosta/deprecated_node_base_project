import { Router } from 'express'

import { signUpController } from './signup/signup.module'

const routes = Router()

routes.post('/signup', (req, res) => signUpController.execute(req, res))

export { routes }
