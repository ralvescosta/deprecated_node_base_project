import { UserRepository } from './user.repository'

const dbConnectionSpy = {
  query: jest.fn(() => [])
}

describe('UserRepository', () => {
  it('findByEmail', async () => {
    const sut = new UserRepository(dbConnectionSpy)

    await sut.findByEmail('email@email.com')

    expect(dbConnectionSpy.query).toHaveBeenCalledTimes(1)
  })
})
