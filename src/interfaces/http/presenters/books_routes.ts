import ILogger from '@app/interfaces/i_logger'
import RouterAdapt from '@infra/adapters/express.router.adapt'
import IControllerBase from '@shared/i_controller_base'
import IRouter from '@shared/i_roter'

type Injection = {
  httpServer: any,
  bookController: IControllerBase,
  logger: ILogger,
  httpResponseFactory: any
}
export default ({ httpServer, bookController, logger }: Injection): IRouter => ({
  register (): void {
    httpServer.registerRoute('post', '/v1/api/books', RouterAdapt(bookController.create!, logger))
    httpServer.registerRoute('get', '/v1/api/books', RouterAdapt(bookController.findAll!, logger))
    httpServer.registerRoute('get', '/v1/api/book/:id', RouterAdapt(bookController.findOne!, logger))
    httpServer.registerRoute('put', '/v1/api/book/:id', RouterAdapt(bookController.update!, logger))
    httpServer.registerRoute('delete', '/v1/api/book/:id', RouterAdapt(bookController.delete!, logger))
  }
})
