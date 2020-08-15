import { createServer } from './server'

async function bootstrap () {
  const PORT = process.env.PORT || 4000
  const server = createServer()
  server.listen(PORT, () => console.log(`Server listening on PORT ${PORT}`))
}

bootstrap()
