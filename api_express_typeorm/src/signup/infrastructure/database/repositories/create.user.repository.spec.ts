import { UserSignUpRepository } from './create.user.repository'
import { getRepository } from 'typeorm'
import UsersTable from '../tables/users.table'
import { CreateUserModel } from '../../../bussiness/models/create.user.model'

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
        findOne: jest.fn(),
        save: jest.fn()

      }
    })
  }
})

function makeSut (): UserSignUpRepository {
  const sut = new UserSignUpRepository()

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

  it('create()', async () => {
    const sut = makeSut()
    const model = new CreateUserModel('', '', '')

    const get = getRepository(UsersTable)
    jest.spyOn(get, 'save').mockResolvedValueOnce(model as never)

    await sut.create(model)

    expect(get.save).toHaveBeenCalledTimes(0)
  })
})
