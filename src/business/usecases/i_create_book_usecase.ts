import CreateBookDto from '@business/dtos/create_book'
import Book from '@business/entities/book'
import BaseError from '@shared/base_error'
import { Either } from '@shared/either'

export default interface ICreateBookUsecase {
  perform: (dto: CreateBookDto) => Promise<Either<BaseError, Book>>
}
