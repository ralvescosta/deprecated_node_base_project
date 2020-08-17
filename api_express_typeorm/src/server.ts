import express, { Application } from 'express'
import helmet from 'helmet'
import cors from 'cors'
import bodyParser from 'body-parser'

import { signUnRoutes } from './signup/infra/routes'

export function createServer (): Application {
  const server = express()

  /**
   * EXPRESS SETUP
   */
  server.use(helmet())
  server.use(cors())
  server.use(bodyParser.json())
  /** */

  /**
   * ROUTES
   */
  server.use('/signup', signUnRoutes)
  /** */

  return server
}
