import { UserSignInRepository } from './user.signin.reporitory'
import { UsersTable } from '../../../../signup'

function makeSut (): UserSignInRepository {
  const sut = new UserSignInRepository()

  return sut
}

describe('User SignUp Repository', () => {
  it('findByEmail()', async () => {
    const sut = makeSut()
    jest.spyOn(UsersTable, 'findOne').mockResolvedValueOnce({} as any)

    await sut.findByEmail('some_email')

    expect(UsersTable.findOne).toHaveBeenCalledTimes(1)
  })
})
