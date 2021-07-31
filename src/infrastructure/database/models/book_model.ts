import { Book } from '@business/entities/book'
import { CreateBook } from '@business/dtos/create_book'
import { dbConnection } from '../connection'

import Sequelize, { Model } from 'sequelize'

class BookModel extends Model<Book, CreateBook> {}

BookModel.init(
  {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    author: {
      type: Sequelize.STRING
    },
    name: {
      type: Sequelize.STRING
    },
    title: {
      type: Sequelize.STRING
    },
    createdAt: {
      type: Sequelize.DATE
    },
    updatedAt: {
      type: Sequelize.DATE
    }
  },
  {
    tableName: 'books',
    sequelize: dbConnection
  }
)
