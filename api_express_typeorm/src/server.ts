import express, { Application } from 'express'
import cors from 'cors'
import helmet from 'helmet'
import bodyParser from 'body-parser'

import { routes } from './routes'

export function createServer (): Application {
  const server = express()

  server.use(cors())
  server.use(helmet())
  server.use(bodyParser.json())

  server.use(routes)

  return server
}
