import bcryptjs from 'bcryptjs'
import { Hasher } from './hasher'

jest.mock('bcryptjs', () => ({
  hash: jest.fn()
}))

function makeSut (): Hasher {
  const sut = new Hasher(8)

  return sut
}

describe('JWT Hasher', () => {
  it('hash()', async () => {
    const sut = makeSut()

    await sut.hash('some_text')

    expect(bcryptjs.hash).toHaveBeenCalledTimes(1)
  })
})
