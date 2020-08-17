import { Router } from 'express'

import { UserSignUpRepository } from './user.signup.repository'
import { Hasher } from './hasher'

import { SignUpController } from '../data/signup.controller'

import { adaptRoute } from '../../core/adapters/express.router.adapt'

const signUnRoutes = Router()

const userSignUpRepository = new UserSignUpRepository()
const hasher = new Hasher(8)
const signUpController = new SignUpController(userSignUpRepository, hasher)

signUnRoutes.post('/', adaptRoute(signUpController))

export { signUnRoutes }
