import BookRepository from '../../../src/infrastructure/repositories/book_repository'
import IBookRepository from '../../../src/applications/interfaces/i_book_repository'
import CreateBookDto from '../../../src/business/dtos/create_book'
import Book from '../../../src/business/entities/book'

function makeSut () {
  const sut = BookRepository() as IBookRepository

  const createBookMock: CreateBookDto = {
    author: 'author',
    name: 'name',
    title: 'title'
  }

  const bookMock: Book = {
    id: 1,
    author: 'author',
    name: 'name',
    title: 'title',
    createdAt: new Date(),
    updatedAt: new Date()
  }

  return {
    sut,
    createBookMock,
    bookMock
  }
}

describe('BookRepository', () => {
  it('createBook()', async () => {
    const { sut, createBookMock } = makeSut()

    const result = await sut.createBook(createBookMock)

    expect(result.isRight()).toBeTruthy()
  })

  it('findBookById()', async () => {
    const { sut } = makeSut()

    const result = await sut.findBookById(1)

    expect(result.isRight()).toBeTruthy()
  })

  it('updateBook()', async () => {
    const { sut, bookMock } = makeSut()

    const result = await sut.updateBook(bookMock.id, bookMock)

    expect(result.isRight()).toBeTruthy()
  })

  it('deleteBookById()', async () => {
    const { sut } = makeSut()

    const result = await sut.deleteBookById(1)

    expect(result.isRight()).toBeTruthy()
  })
})
