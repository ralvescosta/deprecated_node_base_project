import CreateBookDto from '@business/dtos/create_book'
import Book from '@business/entities/book'
import BaseError from '@shared/base_error'
import { Either } from '@shared/either'

export default interface IBookRepository {
  createBook:(book: CreateBookDto) => Promise<Either<BaseError, Book>>
  findBookById: (id: number) => Promise<Either<BaseError, Book>>
  updateBook: (id: number, book: Book) => Promise<Either<BaseError, Book>>
  deleteBookById: (id: number) => Promise<Either<BaseError, boolean>>
}
