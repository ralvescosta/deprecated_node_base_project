import bcrypt from 'bcryptjs'
import { Hasher } from './hasher'

jest.mock('bcryptjs', () => ({
  hash: jest.fn()
}))

describe('Hasher', () => {
  it('compare()', async () => {
    const sut = new Hasher()

    await sut.hash('original')

    expect(bcrypt.hash).toHaveBeenCalledTimes(1)
  })
})
