import { UserSignUpRepository } from './create.user.repository'
import knex from '../../../../core/infra/database'
import { CreateUserModel } from '../../../bussiness/models/create.user.model'

jest.mock('knex', () => {
  return jest.fn(() => {
    return jest.fn(() => {
      return {
        select: jest.fn().mockReturnThis(),
        from: jest.fn().mockReturnThis(),
        where: jest.fn().mockReturnValueOnce([]),
        first: jest.fn().mockReturnThis(),
        insert: jest.fn(()=> {
          return {
            returning: jest.fn().mockResolvedValueOnce({})
          }
        }),
        raw: jest.fn().mockReturnThis(),
        then: jest.fn(function (done) {
          done(null)
        })
      }
    })
  })
})

function makeSut (): UserSignUpRepository {
  const sut = new UserSignUpRepository()

  return sut
}

describe('User SignUp Repository', () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })

  it('findByEmail()', async () => {
    const sut = makeSut()

    await sut.findByEmail('some_email')

    expect(knex).toHaveBeenCalledTimes(1)
    expect(true).toBeTruthy()
  })

  it('create()', async () => {
    const sut = makeSut()
    const model = new CreateUserModel('', '', '')

    await sut.create(model)

    expect(knex).toHaveBeenCalledTimes(1)
  })
})
