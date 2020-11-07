import { UserSignInUsecase } from './user.signin.usecase'

import { JwtCreateTokenSpy } from '../__test__/create.token.spy'
import { HashCompareSpy } from '../__test__/hash.compare.spy'
import { UserRepositorySpy } from '../__test__/user.repository.spy'

function makeSut () {
  const jwtCreateTokenSpy = new JwtCreateTokenSpy()
  const hashCompareSpy = new HashCompareSpy()
  const userRepositorySpy = new UserRepositorySpy()
  const sut = new UserSignInUsecase(userRepositorySpy, hashCompareSpy, jwtCreateTokenSpy)

  return {
    sut,
    userRepositorySpy,
    hashCompareSpy,
    jwtCreateTokenSpy
  }
}

describe('UserSignInUsecase', () => {
  it('createSession()', async () => {
    const { sut, jwtCreateTokenSpy, hashCompareSpy, userRepositorySpy } = makeSut()
    jest.spyOn(jwtCreateTokenSpy, 'sign')
    jest.spyOn(hashCompareSpy, 'compare')
    jest.spyOn(userRepositorySpy, 'findByEmail')

    await sut.createSession({ email: userRepositorySpy.user.email.value, password: '123456' })

    expect(jwtCreateTokenSpy.sign).toHaveBeenCalledTimes(1)
    expect(hashCompareSpy.compare).toHaveBeenCalledTimes(1)
    expect(userRepositorySpy.findByEmail).toHaveBeenCalledTimes(1)
  })
})
