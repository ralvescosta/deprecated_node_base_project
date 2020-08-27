import { ApolloServer, gql } from 'apollo-server'

export function createServer (): ApolloServer {
  const typeDefs1 = gql`
  # Comments in GraphQL strings (such as this one) start with the hash (#) symbol.

  # This "Book" type defines the queryable fields for every book in our data source.
  type Book {
    title: String!
    author: String!
  }
  `

  const typeDefs2 = gql`
    # The "Query" type is special: it lists all of the available queries that
    # clients can execute, along with the return type for each. In this
    # case, the "books" query returns an array of zero or more Books (defined above).
    type Query {
      books: [Book]!
    }
  `

  const typeDefs = [typeDefs1, typeDefs2]

  const books = [
    {
      title: 'Harry Potter and the Chamber of Secrets',
      author: 'J.K. Rowling'
    },
    {
      title: 'Jurassic Park',
      author: 'Michael Crichton'
    }
  ]

  const resolvers = {
    Query: {
      books: () => books
    }
  }

  const server = new ApolloServer({ typeDefs, resolvers, playground: process.env.NODE_ENV === 'development' })

  return server
}
