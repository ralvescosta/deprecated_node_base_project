import express from 'express'
import cors from 'cors'
import helmet from 'helmet'
import bodyParser from 'body-parser'
import ILogger from '@app/interfaces/i_logger'

const server = express()
export default ({ logger }: {logger: ILogger}) => ({
  setup: (): void => {
   server.use(cors())
   server.use(helmet())
   server.use(bodyParser.json())
  },

  registerRoute: (method: string, path: string, handler: any): void => {
    (server as any)[method](path, handler)
  },

  run: (): void => {
    const port = process.env.PORT || 3333
    server.listen(port, () => logger.info({ message: `server running on port ${port}` }))
  }
})
