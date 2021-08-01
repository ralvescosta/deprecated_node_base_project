import CreateBookUsecase from '../../../src/applications/usecases/create_books_usecase'
import IBookRepository from '../../../src/applications/interfaces/i_book_repository'
import InternalError from '../../../src/applications/erros/internal_error'

import BookRepository from '../../../src/infrastructure/repositories/book_repository'
import { left, right } from '../../../src/shared/either'
import Logger from '../../mocks/logger'

function makeSut () {
  const bookRepository = BookRepository() as IBookRepository
  const logger = Logger()
  const sut = CreateBookUsecase({ bookRepository, logger })

  return {
    bookRepository,
    logger,
    sut
  }
}

describe('CreateBookUsecase', () => {
  beforeEach(() => jest.clearAllMocks())
  it('perform()', async () => {
    const { sut, bookRepository, logger } = makeSut()
    jest.spyOn(bookRepository, 'createBook').mockResolvedValueOnce(right({} as any))
    jest.spyOn(logger, 'trace')

    await sut.perform()

    expect(bookRepository.createBook).toHaveBeenCalledTimes(1)
    expect(logger.trace).toHaveBeenCalledTimes(1)
  })

  it('Should return left InternalError if some error occur in bookRepository', async () => {
    const { sut, bookRepository, logger } = makeSut()
    jest.spyOn(bookRepository, 'createBook').mockResolvedValueOnce(left(new Error('some error')))
    jest.spyOn(logger, 'trace')
    jest.spyOn(logger, 'error')

    const result = await sut.perform()

    expect(bookRepository.createBook).toHaveBeenCalledTimes(1)
    expect(logger.trace).toHaveBeenCalledTimes(1)
    expect(logger.error).toHaveBeenCalledTimes(1)
    expect(result.value).toBeInstanceOf(InternalError)
  })
})
