import JWT from 'jsonwebtoken'
import { JWTSign } from './create'

jest.mock('jsonwebtoken', () => ({
  sign: jest.fn()
}))

function makeSut (): JWTSign {
  const sut = new JWTSign('secrety', '10days')
  return sut
}

describe('JWT create token', () => {
  it('sign()', () => {
    const sut = makeSut()

    sut.sign({ id: 1 })

    expect(JWT.sign).toBeCalledTimes(1)
  })
})
