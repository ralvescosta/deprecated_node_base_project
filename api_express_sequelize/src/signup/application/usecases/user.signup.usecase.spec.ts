import { UserSignUp } from './user.signup.usecase'
import { UserSignUpRepositorySpy } from '../__test__/user.signup.repository.spy'
import { HasherSpy } from '../__test__/hasher.spy'
import { CreateTokenSpy } from '../__test__/create.token.spy'
import { AlreadyExistError } from '../../bussiness/errors/already.exist.error'
import { ResultCreateUserModel } from '../../bussiness/models/result.create.user.model'

type SutTypes = {
  sut: UserSignUp,
  userSignUpRepositorySpy: UserSignUpRepositorySpy,
  hahserSpy: HasherSpy,
  createTokenSpy: CreateTokenSpy
}

function makeSut (): SutTypes {
  const userSignUpRepositorySpy = new UserSignUpRepositorySpy()
  const hahserSpy = new HasherSpy()
  const createTokenSpy = new CreateTokenSpy()
  const sut = new UserSignUp(userSignUpRepositorySpy, hahserSpy, createTokenSpy)

  return {
    sut,
    userSignUpRepositorySpy,
    hahserSpy,
    createTokenSpy
  }
}

describe('User SignUp UseCase', () => {
  it('createUser()', async () => {
    const { sut, userSignUpRepositorySpy, hahserSpy, createTokenSpy } = makeSut()
    jest.spyOn(userSignUpRepositorySpy, 'findByEmail').mockResolvedValueOnce(undefined)
    jest.spyOn(userSignUpRepositorySpy, 'create').mockResolvedValueOnce(userSignUpRepositorySpy.user)
    jest.spyOn(hahserSpy, 'hash').mockResolvedValueOnce('hashed')
    jest.spyOn(createTokenSpy, 'sign').mockReturnValueOnce('token')

    await sut.createUser(userSignUpRepositorySpy.user)

    expect(userSignUpRepositorySpy.findByEmail).toHaveBeenCalledTimes(1)
    expect(hahserSpy.hash).toHaveBeenCalledTimes(1)
    expect(userSignUpRepositorySpy.create).toHaveBeenCalledTimes(1)
    expect(createTokenSpy.sign).toHaveBeenCalledTimes(1)
  })

  it('Should throw AlreadyExistError if findByEmail returns user instance', async () => {
    const { sut, userSignUpRepositorySpy } = makeSut()
    jest.spyOn(userSignUpRepositorySpy, 'findByEmail').mockResolvedValueOnce(userSignUpRepositorySpy.user)

    const promise = sut.createUser(userSignUpRepositorySpy.user)
    await expect(promise).rejects.toThrow(new AlreadyExistError())
  })

  it('Should returns ResultCreateUserModel if user be created', async () => {
    const { sut, userSignUpRepositorySpy } = makeSut()
    jest.spyOn(userSignUpRepositorySpy, 'findByEmail').mockResolvedValueOnce(undefined)

    const result = await sut.createUser(userSignUpRepositorySpy.user)
    expect(result).toBeInstanceOf(ResultCreateUserModel)
  })
})
