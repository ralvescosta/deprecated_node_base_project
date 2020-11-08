import { User } from './user'

import { InvalidNameError } from '../errors/invalid.name.error'
import { InvalidEmailError } from '../errors/invalid.email.error'
import { InvalidPasswordError } from '../errors/invalid.password.error'

describe('User', () => {
  it('Should return isLeft = true and value is an instance of InvalidNameError if the name input is in the wrong format', () => {
    const user = User.create({ name: 'na', email: 'email@email.com', password: '123456' })

    expect(user.isLeft()).toBeTruthy()
    expect(user.isRight()).toBeFalsy()
    expect(user.value).toBeInstanceOf(InvalidNameError)
  })

  it('Should return isLeft = true and value is an instance of InvalidEmailError if the email input is in the wrong format', () => {
    const user = User.create({ name: 'name', email: 'email@email', password: '123456' })

    expect(user.isLeft()).toBeTruthy()
    expect(user.isRight()).toBeFalsy()
    expect(user.value).toBeInstanceOf(InvalidEmailError)
  })

  it('Should return isLeft = true and value is an instance of InvalidPasswordError if the password input is in the wrong format', () => {
    const user = User.create({ name: 'name', email: 'email@email.com', password: '12345' })

    expect(user.isLeft()).toBeTruthy()
    expect(user.isRight()).toBeFalsy()
    expect(user.value).toBeInstanceOf(InvalidPasswordError)
  })

  it('Should return isRight = true and User if the inputs are in the correctly format', () => {
    const password = User.create({ name: 'name', email: 'email@email.com', password: '123456' })

    expect(password.isRight()).toBeTruthy()
    expect(password.isLeft()).toBeFalsy()
    expect(password.value).toBeInstanceOf(User)
  })
})
