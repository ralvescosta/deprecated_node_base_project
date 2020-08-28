import { Router } from 'express'

import { UserSignUp } from './signup/application/usecases/user.signup.usecase'
import { SignUpController } from './signup/interfaces/controllers/signup.controller'
import { UserSignUpRepository } from './signup/infrastructure/database/repositories/create.user.repository'

import { UserSignIn } from './signin/application/usecases/user.signin.usecase'
import { SignInController } from './signin/interfaces/controllers/signin.controller'
import { UserSignInRepository } from './signin/infrastructure/database/repositories/user.signin.reporitory'

import { Hasher } from './signup/infrastructure/hash/hasher'
import { HasheCompare } from './signin/infrastructure/hash/hashe.compare'
import { JWTSign } from './signup/infrastructure/jwt/create'

import { adaptRoute } from './signup/infrastructure/adapters/express.router.adapt'

const routes = Router()

const userSignUpRepository = new UserSignUpRepository()
const hasher = new Hasher(8)
const jwtSign = new JWTSign('123456', '8hours')
const userSignUp = new UserSignUp(userSignUpRepository, hasher, jwtSign)
const signUpController = new SignUpController(userSignUp)
routes.post('/signup', adaptRoute(signUpController))

const userSignInRepository = new UserSignInRepository()
const hasheCompare = new HasheCompare()
const userSignIn = new UserSignIn(userSignInRepository, hasheCompare, jwtSign)
const signInController = new SignInController(userSignIn)
routes.post('/signin', adaptRoute(signInController))

export { routes }
