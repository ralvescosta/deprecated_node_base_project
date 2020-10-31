import bcryptjs from 'bcryptjs'
import { HasheCompare } from './hashe.compare'

jest.mock('bcryptjs', () => ({
  compare: jest.fn()
}))

function makeSut (): HasheCompare {
  const sut = new HasheCompare()

  return sut
}

describe('Hashe Compare', () => {
  it('compare()', async () => {
    const sut = makeSut()

    await sut.compare('some_text', 'some_hash')

    expect(bcryptjs.compare).toHaveBeenCalledTimes(1)
  })
})
