import { UserSignIn } from './user.signin.usecase'
import { UserSignInRepositorySpy } from '../__test__/user.signin.repository.spy'
import { HashCompareSpy } from '../__test__/hashe.compare.spy'
import { CreateTokenSpy } from '../__test__/create.token.spy'
import { NotFoundError } from '../../bussiness/errors/not.found.error'
import { PasswordWrongError } from '../../bussiness/errors/password.wrong.error'
import { UserSession } from '../../bussiness/models/user.session'

type SutTypes = {
  sut: UserSignIn,
  signInRepositorySpy: UserSignInRepositorySpy,
  hashCompareSpy: HashCompareSpy,
  createTokenSpy: CreateTokenSpy
}

function makeSut (): SutTypes {
  const signInRepositorySpy = new UserSignInRepositorySpy()
  const hashCompareSpy = new HashCompareSpy()
  const createTokenSpy = new CreateTokenSpy()
  const sut = new UserSignIn(signInRepositorySpy, hashCompareSpy, createTokenSpy)

  return {
    sut,
    signInRepositorySpy,
    hashCompareSpy,
    createTokenSpy
  }
}

describe('User SignIn Usercase', () => {
  it('createSession()', async () => {
    const { sut, signInRepositorySpy, hashCompareSpy, createTokenSpy } = makeSut()
    jest.spyOn(signInRepositorySpy, 'findByEmail').mockResolvedValueOnce(signInRepositorySpy.user)
    jest.spyOn(hashCompareSpy, 'compare').mockResolvedValueOnce(true)
    jest.spyOn(createTokenSpy, 'sign').mockReturnValueOnce('token')

    await sut.createSession({ email: '', password: '' })

    expect(signInRepositorySpy.findByEmail).toHaveBeenCalledTimes(1)
    expect(hashCompareSpy.compare).toHaveBeenCalledTimes(1)
    expect(createTokenSpy.sign).toHaveBeenCalledTimes(1)
  })

  it('Should throw NotFoundError if email are not registered', async () => {
    const { sut, signInRepositorySpy } = makeSut()
    jest.spyOn(signInRepositorySpy, 'findByEmail').mockResolvedValueOnce(undefined)

    const result = sut.createSession({ email: '', password: '' })

    await expect(result).rejects.toThrow(new NotFoundError())
  })

  it('Should throw PasswordWrongError if password informed not match', async () => {
    const { sut, hashCompareSpy } = makeSut()
    jest.spyOn(hashCompareSpy, 'compare').mockResolvedValueOnce(false)

    const result = sut.createSession({ email: '', password: '' })

    await expect(result).rejects.toThrow(new PasswordWrongError())
  })

  it('Should UserSession if success', async () => {
    const { sut } = makeSut()

    const result = await sut.createSession({ email: '', password: '' })

    expect(result).toBeInstanceOf(UserSession)
  })
})
