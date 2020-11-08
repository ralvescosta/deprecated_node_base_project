import { Email } from './email'
import { InvalidEmailError } from '../errors/invalid.email.error'

describe('Email', () => {
  it('Should return isLeft = true and value is an instance of InvalidEmailError if the email input is in the wrong format', () => {
    let email = Email.create('email')

    expect(email.isLeft()).toBeTruthy()
    expect(email.isRight()).toBeFalsy()
    expect(email.value).toBeInstanceOf(InvalidEmailError)

    email = Email.create('email@email')

    expect(email.isLeft()).toBeTruthy()
    expect(email.isRight()).toBeFalsy()
    expect(email.value).toBeInstanceOf(InvalidEmailError)
  })

  it('Should return isRight = true and Email if the email input is in the correctly format', () => {
    const email = Email.create('email@email.com')

    expect(email.isRight()).toBeTruthy()
    expect(email.isLeft()).toBeFalsy()
    expect(email.value).toBeInstanceOf(Email)
  })
})
