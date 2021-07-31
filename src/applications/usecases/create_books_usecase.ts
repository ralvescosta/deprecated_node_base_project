import IBookRepository from '@app/interfaces/i_book_repository'
import ILogger from '@app/interfaces/i_logger'
import Book from '@business/entities/book'
import { Either, left, right } from '@shared/either'

type Injection = {
  logger: ILogger,
  bookRepository: IBookRepository
}
export default ({ logger, bookRepository }: Injection) => ({
  perform: async (): Promise<Either<any, Book>> => {
    logger.trace({ action: 'do something' })

    const result = await bookRepository.createBook({} as any)
    if (result.isLeft()) {
      return left(result.value)
    }

    return right({} as Book)
  }
})
