import 'reflect-metadata'
import { createServer } from './server'
import { PORT } from './config/env'
import { createConnection as createDatabaseConnection } from 'typeorm'

async function bootstrap (): Promise<void> {
  try {
    await createDatabaseConnection()

    const server = createServer()
    const appPort = process.env.PORT || PORT

    server.listen(appPort, () => console.log(`Server running at: 127.0.0.1:${appPort}`))
  } catch (err) {
    console.log(err)
    process.exit(1)
  }
}

bootstrap()
