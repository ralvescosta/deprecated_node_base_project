import JWT from 'jsonwebtoken'
import { JwtCreateToken } from './create.token'

jest.mock('jsonwebtoken', () => ({
  sign: jest.fn()
}))

describe('JwtCreateToken', () => {
  it('sign()', async () => {
    const sut = new JwtCreateToken()

    await sut.sign({ id: 1 })

    expect(JWT.sign).toHaveBeenCalledTimes(1)
  })
})
