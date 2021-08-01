import InternalError from '@app/erros/internal_error'
import IBookRepository from '@app/interfaces/i_book_repository'
import ILogger from '@app/interfaces/i_logger'
import Book from '@business/entities/book'
import BaseError from '@shared/base_error'
import { Either, left, right } from '@shared/either'

type Injection = {
  logger: ILogger,
  bookRepository: IBookRepository
}
export default ({ logger, bookRepository }: Injection) => ({
  perform: async (): Promise<Either<BaseError, Book>> => {
    logger.trace({ action: 'do something' })

    const result = await bookRepository.createBook({} as any)
    if (result.isLeft()) {
      logger.error({ message: 'Error when create a book in database', trace: result.value })
      return left(new InternalError('some error occur'))
    }

    return right({} as Book)
  }
})
