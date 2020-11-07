import { SignupController } from './signup.controller'
import { RegisterUserUsecaseSpy } from '../__test__/register.user.usecase.spy'

function makeSut () {
  const registerUserUsecaseSpy = new RegisterUserUsecaseSpy()

  const sut = new SignupController(registerUserUsecaseSpy)

  return {
    sut,
    registerUserUsecaseSpy
  }
}

describe('SignupController', () => {
  it('handle()', async () => {
    const { sut, registerUserUsecaseSpy } = makeSut()
    jest.spyOn(registerUserUsecaseSpy, 'register')

    await sut.handle({ body: { name: 'name', email: 'email@email.com', password: 'password' } })

    expect(registerUserUsecaseSpy.register).toHaveBeenCalledTimes(1)
  })
})
