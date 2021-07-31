import Book from '../entities/book'
export default interface CreateBookDto extends Omit<Book, 'id' | 'createAt' | 'updatedAt'>{}
