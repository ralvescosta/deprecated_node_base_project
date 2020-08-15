import express, { Application } from 'express'
import helmet from 'helmet'
import cors from 'cors'
import bodyParser from 'body-parser'

import { signUpRoute } from './signup/routes'

export function createServer (): Application {
  const server = express()

  server.use(cors())
  server.use(helmet())
  server.use(bodyParser.json())

  server.use('/signup', signUpRoute)

  return server
}
