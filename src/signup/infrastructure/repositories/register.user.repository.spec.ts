import { RegisterUserRepository } from './register.user.repository'

const dbConnectionSpy = {
  query: jest.fn(() => [])
}

describe('UserRepository', () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })
  it('exists()', async () => {
    const sut = new RegisterUserRepository(dbConnectionSpy)

    await sut.exists('email@email.com')

    expect(dbConnectionSpy.query).toHaveBeenCalledTimes(1)
  })

  it('create()', async () => {
    const sut = new RegisterUserRepository(dbConnectionSpy)

    await sut.create({ name: 'name', email: 'email@email.com', password: 'passwordHash' })

    expect(dbConnectionSpy.query).toHaveBeenCalledTimes(1)
  })
})
