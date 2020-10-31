import { UserSignInRepository } from './user.signin.reporitory'
import knex from '../../../../core/infra/database'

function makeSut (): UserSignInRepository {
  const sut = new UserSignInRepository()

  return sut
}

jest.mock('knex', () => {
  return jest.fn(() => {
    return jest.fn(() => {
      return {
        select: jest.fn().mockReturnThis(),
        from: jest.fn().mockReturnThis(),
        where: jest.fn().mockReturnValueOnce([]),
        first: jest.fn().mockReturnThis(),
        insert: jest.fn().mockReturnThis(),
        raw: jest.fn().mockReturnThis(),
        then: jest.fn(function (done) {
          done(null)
        })
      }
    })
  })
})

describe('User SignUp Repository', () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })

  it('findByEmail()', async () => {
    const sut = makeSut()

    await sut.findByEmail('some_email')

    expect(knex).toHaveBeenCalledTimes(1)
  })
})
