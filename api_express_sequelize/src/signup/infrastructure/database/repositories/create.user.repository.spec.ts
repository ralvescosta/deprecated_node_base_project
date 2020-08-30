import { UserSignUpRepository } from './create.user.repository'
import UsersTable from '../tables/users.table'
import { CreateUserModel } from '../../../bussiness/models/create.user.model'

function makeSut (): UserSignUpRepository {
  const sut = new UserSignUpRepository()

  return sut
}

describe('User SignUp Repository', () => {
  it('findByEmail()', async () => {
    const sut = makeSut()
    jest.spyOn(UsersTable, 'findOne').mockResolvedValueOnce({} as any)

    await sut.findByEmail('some_email')

    expect(UsersTable.findOne).toHaveBeenCalledTimes(1)
  })

  it('create()', async () => {
    const sut = makeSut()
    jest.spyOn(UsersTable, 'create').mockResolvedValueOnce({} as any)
    const model = new CreateUserModel('', '', '')

    await sut.create(model)

    expect(UsersTable.create).toHaveBeenCalledTimes(1)
  })
})
