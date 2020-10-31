import { SignInController } from './signin.controller'
import { SignInSpy } from '../__test__/signin.spy'
import { NotFoundError } from '../../bussiness/errors/not.found.error'
import { PasswordWrongError } from '../../bussiness/errors/password.wrong.error'
import { UnauthorizeError } from '../../bussiness/errors/unauthorize.error'

type SutTypes = {
  sut: SignInController,
  signInSpy: SignInSpy
}

function makeSut (): SutTypes {
  const signInSpy = new SignInSpy()
  const sut = new SignInController(signInSpy)

  return {
    sut,
    signInSpy
  }
}

describe('SignUp Controller', () => {
  it('handle()', async () => {
    const { sut, signInSpy } = makeSut()
    jest.spyOn(signInSpy, 'createSession').mockResolvedValueOnce(signInSpy.result)

    await sut.handle({ body: { name: 'name', email: 'email', password: 'password' } })

    expect(signInSpy.createSession).toHaveBeenCalledTimes(1)
  })

  it('Should return statusCode 400 if body is empty', async () => {
    const { sut } = makeSut()

    const result = await sut.handle({ body: {} })

    expect(result.statusCode).toBe(400)
  })

  it('Should return statusCode 415 if email or password are empty', async () => {
    const { sut } = makeSut()

    let result = await sut.handle({ body: { email: '', password: 'password' } })
    expect(result.statusCode).toBe(415)

    result = await sut.handle({ body: { email: 'email', password: '' } })
    expect(result.statusCode).toBe(415)
  })

  it('Should return statusCode 404 if signUpService throw NOT_FOUND_ERROR ', async () => {
    const { sut, signInSpy } = makeSut()
    jest.spyOn(signInSpy, 'createSession').mockRejectedValueOnce(new NotFoundError())

    const result = await sut.handle({ body: { email: 'email', password: 'password' } })
    expect(result.statusCode).toBe(404)
  })

  it('Should return statusCode 401 if signUpService throw PASSWORD_WRONG_ERROR ', async () => {
    const { sut, signInSpy } = makeSut()
    jest.spyOn(signInSpy, 'createSession').mockRejectedValueOnce(new PasswordWrongError())

    const result = await sut.handle({ body: { email: 'email', password: 'password' } })
    expect(result.statusCode).toBe(401)
  })

  it('Should return statusCode 401 if signUpService throw UNAUTHORIZED_ERROR ', async () => {
    const { sut, signInSpy } = makeSut()
    jest.spyOn(signInSpy, 'createSession').mockRejectedValueOnce(new UnauthorizeError())

    const result = await sut.handle({ body: { email: 'email', password: 'password' } })
    expect(result.statusCode).toBe(401)
  })

  it('Should return statusCode 500 if signUpService throw Any Error ', async () => {
    const { sut, signInSpy } = makeSut()
    jest.spyOn(signInSpy, 'createSession').mockRejectedValueOnce(new Error())

    const result = await sut.handle({ body: { email: 'email', password: 'password' } })
    expect(result.statusCode).toBe(500)
  })

  it('Should return statusCode 201 if Session was created', async () => {
    const { sut, signInSpy } = makeSut()

    const result = await sut.handle({ body: { email: 'email', password: 'password' } })
    expect(result.statusCode).toBe(200)
  })
})
