import { UserSignInRepository } from './user.signin.reporitory'
import { getRepository } from 'typeorm'
import { UsersTable } from '../../../../signup'

jest.mock('typeorm', () => {
  return {
    Entity: jest.fn(),
    PrimaryGeneratedColumn: jest.fn(),
    Column: jest.fn(),
    CreateDateColumn: jest.fn(),
    UpdateDateColumn: jest.fn(),
    DeleteDateColumn: jest.fn(),
    getRepository: jest.fn(() => {
      return {
        findOne: jest.fn()
      }
    })
  }
})

function makeSut (): UserSignInRepository {
  const sut = new UserSignInRepository()

  return sut
}

describe('User SignUp Repository', () => {
  it('findByEmail()', async () => {
    const sut = makeSut()
    const get = getRepository(UsersTable)
    jest.spyOn(get, 'findOne').mockResolvedValueOnce({} as never)

    await sut.findByEmail('some_email')

    expect(get.findOne).toHaveBeenCalledTimes(0)
  })
})
