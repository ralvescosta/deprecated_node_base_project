import { SigninController } from './signin.controller'
import { UserSignInUsecaseSpy } from '../__test__/user.signin.usecase.spy'

function makeSut () {
  const userSignInUsecaseSpy = new UserSignInUsecaseSpy()
  const sut = new SigninController(userSignInUsecaseSpy)

  return {
    sut,
    userSignInUsecaseSpy
  }
}

describe('SigninController', () => {
  it('handle()', async () => {
    const { sut, userSignInUsecaseSpy } = makeSut()
    jest.spyOn(userSignInUsecaseSpy, 'createSession')

    await sut.handle({ body: { email: 'email', password: 'password' } })

    expect(userSignInUsecaseSpy.createSession).toHaveBeenCalledTimes(1)
  })
})
