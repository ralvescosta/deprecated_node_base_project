import Book from '../entities/book'
export default interface CreateBook extends Omit<Book, 'id' | 'createAt' | 'updatedAt'>{}
