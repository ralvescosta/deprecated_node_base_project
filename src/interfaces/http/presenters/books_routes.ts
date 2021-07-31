import { ILogger } from '@app/interfaces/i_logger'
import RouterAdapt from '@infra/adapters/express.router.adapt'

type Injection = {
  server: any,
  controller: any,
  logger: ILogger
}
export default ({ server, controller, logger }: Injection) => ({
  register (): void {
    server.post('/books', RouterAdapt(controller.create.bind(controller), logger))
    server.get('/books', RouterAdapt(controller.findAll.bind(controller), logger))
    server.get('/books', RouterAdapt(controller.findOne.bind(controller), logger))
    server.put('/books', RouterAdapt(controller.update.bind(controller), logger))
    server.delete('/books', RouterAdapt(controller.delete.bind(controller), logger))
  }
})
