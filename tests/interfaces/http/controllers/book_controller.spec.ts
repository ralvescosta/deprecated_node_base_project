import BookController from '../../../../src/interfaces/http/controllers/books_controller'
import BookRepository from '../../../../src/infrastructure/repositories/book_repository'
import { HttpRequest } from '../../../../src/infrastructure/http_server/http'
import Logger from '../../../mocks/logger'
import CreateBookUsecase from '../../../../src/applications/usecases/create_books_usecase'
import HttpResponseFactory from '../../../../src/shared/http_response_factory'
import { left, right } from '../../../../src/shared/either'
import InternalError from '../../../../src/applications/erros/internal_error'

function makeSut () {
  const bookRepository = BookRepository()
  const logger = Logger()
  const createBookUsecase = CreateBookUsecase({ bookRepository, logger })
  const httpResponseFactory = HttpResponseFactory()
  const sut = BookController({ createBookUsecase, httpResponseFactory })

  const httpRequestMock: HttpRequest = {
    body: {},
    headers: {}
  }

  return { bookRepository, logger, createBookUsecase, httpResponseFactory, httpRequestMock, sut }
}
describe('BookController', () => {
  beforeEach(() => jest.clearAllMocks())

  describe('CREATE', () => {
    it('create()', async () => {
      const { sut, httpRequestMock, createBookUsecase } = makeSut()
      jest.spyOn(createBookUsecase, 'perform').mockResolvedValueOnce(right({} as any) as any)

      await sut.create(httpRequestMock)

      expect(createBookUsecase.perform).toHaveBeenCalledTimes(1)
    })

    it('Should return statusCode 201 if book is created', async () => {
      const { sut, httpRequestMock, createBookUsecase } = makeSut()
      jest.spyOn(createBookUsecase, 'perform').mockResolvedValueOnce(right({} as any) as any)

      const result = await sut.create(httpRequestMock)

      expect(createBookUsecase.perform).toHaveBeenCalledTimes(1)
      expect(result.statusCode).toEqual(201)
    })

    it('Should return statusCode 500 if some InternalError occur', async () => {
      const { sut, httpRequestMock, createBookUsecase } = makeSut()
      jest.spyOn(createBookUsecase, 'perform').mockResolvedValueOnce(left(new InternalError()))

      const result = await sut.create(httpRequestMock)

      expect(createBookUsecase.perform).toHaveBeenCalledTimes(1)
      expect(result.statusCode).toEqual(500)
    })

    it('Should return statusCode 400 if some unknown error occur', async () => {
      const { sut, httpRequestMock, createBookUsecase } = makeSut()
      jest.spyOn(createBookUsecase, 'perform').mockResolvedValueOnce(left(new Error()))

      const result = await sut.create(httpRequestMock)

      expect(createBookUsecase.perform).toHaveBeenCalledTimes(1)
      expect(result.statusCode).toEqual(400)
    })
  })

  describe('FIND ONE', () => {
    it('findOne()', async () => {
      const { sut, httpRequestMock } = makeSut()

      const result = await sut.findOne(httpRequestMock)

      expect(result.statusCode).toEqual(200)
    })
  })

  describe('FIND ALL', () => {
    it('findAll()', async () => {
      const { sut, httpRequestMock } = makeSut()

      const result = await sut.findAll(httpRequestMock)

      expect(result.statusCode).toEqual(200)
    })
  })

  describe('UPDATE', () => {
    it('update()', async () => {
      const { sut, httpRequestMock } = makeSut()

      const result = await sut.update(httpRequestMock)

      expect(result.statusCode).toEqual(200)
    })
  })

  describe('DELETE', () => {
    it('delete()', async () => {
      const { sut, httpRequestMock } = makeSut()

      const result = await sut.delete(httpRequestMock)

      expect(result.statusCode).toEqual(200)
    })
  })
})
