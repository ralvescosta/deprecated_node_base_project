import { Book } from '@business/entities/book'
import { Either } from '@shared/either'

export default interface IBookRepository {
  createBook:(book: Book) => Promise<Either<any, Book>>
  findBookById: (id: number) => Promise<Either<any, Book>>
  updateBook: (id: number, book: Book) => Promise<Either<any, Book>>
  deleteBookById: (id: number) => Promise<Either<any, boolean>>
}
