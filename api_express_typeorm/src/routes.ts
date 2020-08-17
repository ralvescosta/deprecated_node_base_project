import { Router } from 'express'

import { UserSignUpRepository } from './signup/infra/user.signup.repository'
import { Hasher } from './signup/infra/hasher'

import { SignUpController } from './signup/data/signup.controller'

import { adaptRoute } from './core/adapters/express.router.adapt'

import { HASH_SALT } from './core/config/env'

const signUnRoutes = Router()

const userSignUpRepository = new UserSignUpRepository()
const hasher = new Hasher(HASH_SALT)
const signUpController = new SignUpController(userSignUpRepository, hasher)

signUnRoutes.post('/', adaptRoute(signUpController))

export { signUnRoutes }
