import BookRoutes from '../../../../src/interfaces/http/presenters/books_routes'
import Logger from '../../../mocks/logger'
import HttpServer from '../../../../src/infrastructure/http_server/http_server'
import BookController from '../../../../src/interfaces/http/controllers/books_controller'
import CreateBookUsecase from '../../../../src/applications/usecases/create_books_usecase'
import BookRepository from '../../../../src/infrastructure/repositories/book_repository'
import HttpResponseFactory from '../../../../src/shared/http_response_factory'

function makeSut () {
  const logger = Logger()
  const httpServer = HttpServer({ logger })
  const bookRepository = BookRepository()
  const createBookUsecase = CreateBookUsecase({ bookRepository, logger })
  const httpResponseFactory = HttpResponseFactory()
  const bookController = BookController({ createBookUsecase, httpResponseFactory })

  const sut = BookRoutes({ logger, httpServer, bookController: bookController as any })

  return {
    logger,
    httpServer,
    bookRepository,
    createBookUsecase,
    httpResponseFactory,
    bookController,
    sut
  }
}

describe('BookRoutes', () => {
  beforeEach(() => jest.clearAllMocks())

  it('register()', () => {
    const { sut, httpServer } = makeSut()
    jest.spyOn(httpServer, 'registerRoute')
    sut.register()
    expect(httpServer.registerRoute).toHaveBeenCalledTimes(5)
  })
})
