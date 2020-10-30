import { createServer } from './server'
// import DbConnection from './core/infra/database/index'

async function bootstrap () {
  const PORT = process.env.PORT || 4000

  // try {
  //   await DbConnection.authenticate()
  // } catch (err) {
  //   console.error(err)
  // }

  const server = createServer()

  server.listen(PORT, () => console.log(`Server Listening on Port ${PORT}`))
}

bootstrap()
