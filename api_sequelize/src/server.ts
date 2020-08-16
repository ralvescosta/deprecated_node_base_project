import express, { Application } from 'express'
import cors from 'cors'
import helmet from 'helmet'
import bodyParser from 'body-parser'

export function createServer (): Application {
  const server = express()

  server.use(cors())
  server.use(helmet())
  server.use(bodyParser.json())

  server.get('/', (req, res) => res.send('Hello Word'))

  return server
}
