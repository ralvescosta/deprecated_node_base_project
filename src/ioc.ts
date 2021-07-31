import { createContainer, InjectionMode, asValue, AwilixContainer, asFunction } from 'awilix'
import pino from 'pino'

import HttpResponseFactory from '@shared/http_response_factory'
import HttpServer from '@infra/http_server/http_server'

import BookRepository from '@infra/repositories/book_repository'
import CreateBookUsecase from '@app/usecases/create_books_usecase'
import BookController from '@interfaces/http/controllers/books_controller'
import BookRoutes from '@interfaces/http/presenters/books_routes'

export const container = createContainer({
  injectionMode: InjectionMode.PROXY
})
export const registerInjections = (): AwilixContainer => {
  const logger = pino({
    enabled: process.env.ENABLE_LOG === 'true',
    level: process.env.LOG_LEVEL || 'warn'
  })
  container.register({
    logger: asValue(logger),
    httpServer: asFunction(HttpServer).singleton(),
    httpResponseFactory: asFunction(HttpResponseFactory).singleton(),

    bookRepository: asFunction(BookRepository).scoped(),
    createBookUsecase: asFunction(CreateBookUsecase).scoped(),
    bookController: asFunction(BookController).singleton(),
    bookRoutes: asFunction(BookRoutes).singleton()
  })

  return container
}
