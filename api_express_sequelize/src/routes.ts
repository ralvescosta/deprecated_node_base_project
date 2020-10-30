import { Router } from 'express'

import { signupRoute } from './signup/signup.module'

const routes = Router()

routes.post('/signup', signupRoute)

export { routes }
