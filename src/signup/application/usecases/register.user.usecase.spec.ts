import { RegisterUserUsecase } from './register.user.usecase'

import { HasherSpy } from '../__test__/hasher.spy'
import { RegisterUserRepositorySpy } from '../__test__/register.user.repository.spy'

function makeSut () {
  const hasherSpy = new HasherSpy()
  const registerUserRepositorySpy = new RegisterUserRepositorySpy()

  const sut = new RegisterUserUsecase(registerUserRepositorySpy, hasherSpy)

  return {
    sut,
    hasherSpy,
    registerUserRepositorySpy
  }
}

describe('RegisterUserUsecase', () => {
  it('register()', async () => {
    const { sut, registerUserRepositorySpy, hasherSpy } = makeSut()
    jest.spyOn(registerUserRepositorySpy, 'exists')
    jest.spyOn(registerUserRepositorySpy, 'create')
    jest.spyOn(hasherSpy, 'hash')

    await sut.register({ email: 'email@email.com', name: 'name', password: 'password' })

    expect(registerUserRepositorySpy.exists).toHaveBeenCalledTimes(1)
    expect(hasherSpy.hash).toHaveBeenCalledTimes(1)
    expect(registerUserRepositorySpy.create).toHaveBeenCalledTimes(1)
  })
})
