import { Password } from './password'
import { InvalidPasswordError } from '../errors/invalid.password.error'

describe('Password', () => {
  it('Should return isLeft = true and value is an instance of InvalidPasswordError if the password input length is < 6', () => {
    const password = Password.create('12345')

    expect(password.isLeft()).toBeTruthy()
    expect(password.isRight()).toBeFalsy()
    expect(password.value).toBeInstanceOf(InvalidPasswordError)
  })

  it('Should return isRight = true and Password if the password input is in the correctly format', () => {
    const password = Password.create('123456')

    expect(password.isRight()).toBeTruthy()
    expect(password.isLeft()).toBeFalsy()
    expect(password.value).toBeInstanceOf(Password)
  })
})
