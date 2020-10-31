import { SignUpController } from './signup.controller'
import { SignUpSpy } from '../__test__/signup.spy'
import { AlreadyExistError } from '../../bussiness/errors/already.exist.error'

type SutTypes = {
  sut: SignUpController,
  signUpSpy: SignUpSpy
}

function makeSut (): SutTypes {
  const signUpSpy = new SignUpSpy()
  const sut = new SignUpController(signUpSpy)

  return {
    sut,
    signUpSpy
  }
}

describe('SignUp Controller', () => {
  it('handle()', async () => {
    const { sut, signUpSpy } = makeSut()
    jest.spyOn(signUpSpy, 'createUser').mockResolvedValueOnce(signUpSpy.result)

    await sut.handle({ body: { name: 'name', email: 'email', password: 'password' } })

    expect(signUpSpy.createUser).toHaveBeenCalledTimes(1)
  })

  it('Should return statusCode 400 if body is empty', async () => {
    const { sut } = makeSut()

    const result = await sut.handle({ body: {} })

    expect(result.statusCode).toBe(400)
  })

  it('Should return statusCode 415 if name, email or password are empty', async () => {
    const { sut } = makeSut()

    let result = await sut.handle({ body: { name: '', email: 'email', password: 'password' } })
    expect(result.statusCode).toBe(415)

    result = await sut.handle({ body: { name: 'name', email: '', password: 'password' } })
    expect(result.statusCode).toBe(415)

    result = await sut.handle({ body: { name: 'name', email: 'email', password: '' } })
    expect(result.statusCode).toBe(415)
  })

  it('Should return statusCode 409 if signUpService throw ALREADY_EXIST_ERROR ', async () => {
    const { sut, signUpSpy } = makeSut()
    jest.spyOn(signUpSpy, 'createUser').mockRejectedValueOnce(new AlreadyExistError())

    const result = await sut.handle({ body: { name: 'name', email: 'email', password: 'password' } })
    expect(result.statusCode).toBe(409)
  })

  it('Should return statusCode 500 if Unsuspected error occurred', async () => {
    const { sut, signUpSpy } = makeSut()
    jest.spyOn(signUpSpy, 'createUser').mockRejectedValueOnce(new Error())

    const result = await sut.handle({ body: { name: 'name', email: 'email', password: 'password' } })
    expect(result.statusCode).toBe(500)
  })

  it('Should return statusCode 201 if User Account was created', async () => {
    const { sut } = makeSut()

    const result = await sut.handle({ body: { name: 'name', email: 'email', password: 'password' } })
    expect(result.statusCode).toBe(201)
  })
})
