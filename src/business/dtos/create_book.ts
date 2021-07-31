import { Book } from '../entities/book'
export interface CreateBook extends Omit<Book, 'id' | 'createAt' | 'updatedAt'>{}
