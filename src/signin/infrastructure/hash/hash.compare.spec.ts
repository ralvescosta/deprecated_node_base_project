import bcrypt from 'bcryptjs'
import { HashCompare } from './hash.compare'

jest.mock('bcryptjs', () => ({
  compare: jest.fn()
}))

describe('HashCompare', () => {
  it('compare()', async () => {
    const sut = new HashCompare()

    await sut.compare('original', 'hash')

    expect(bcrypt.compare).toHaveBeenCalledTimes(1)
  })
})
