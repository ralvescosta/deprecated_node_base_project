import { createServer } from './server'

async function bootstrap () {
  const server = createServer()

  await server.listen()
}

bootstrap()
