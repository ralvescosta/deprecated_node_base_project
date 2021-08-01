import IBookRepository from '@app/interfaces/i_book_repository'
import Book from '@business/entities/book'
import BaseError from '@shared/base_error'
import { Either, right } from '@shared/either'

export default (): IBookRepository => ({
   createBook: async (book: Book): Promise<Either<BaseError, Book>> => {
    return right({} as Book)
  },
  findBookById: async (id: number): Promise<Either<BaseError, Book>> => {
    return right({} as Book)
  },
  updateBook: async (id: number, book: Book): Promise<Either<BaseError, Book>> => {
    return right({} as Book)
  },
  deleteBookById: async (id: number): Promise<Either<BaseError, boolean>> => {
    return right(true)
  }
})
