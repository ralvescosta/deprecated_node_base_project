import IBookRepository from '@app/interfaces/i_book_repository'
import CreateBookDto from '@business/dtos/create_book'
import Book from '@business/entities/book'
import BaseError from '@shared/base_error'
import { Either, right } from '@shared/either'

export default (): IBookRepository => ({
   createBook: async (book: CreateBookDto): Promise<Either<BaseError, Book>> => {
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
