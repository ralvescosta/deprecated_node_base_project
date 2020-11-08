import { Session } from './session'

import { InvalidNameError, InvalidEmailError } from '../../../signup/business'

describe('Session', () => {
  it('Should return isLeft = true and value is an instance of InvalidNameError if the name input is in the wrong format', () => {
    const session = Session.create({ name: 'na', email: 'email@email.com', accessToken: 'token' })

    expect(session.isLeft()).toBeTruthy()
    expect(session.isRight()).toBeFalsy()
    expect(session.value).toBeInstanceOf(InvalidNameError)
  })

  it('Should return isLeft = true and value is an instance of InvalidEmailError if the email input is in the wrong format', () => {
    const session = Session.create({ name: 'name', email: 'email@email', accessToken: 'token' })

    expect(session.isLeft()).toBeTruthy()
    expect(session.isRight()).toBeFalsy()
    expect(session.value).toBeInstanceOf(InvalidEmailError)
  })

  it('Should return isRight = true and Session if the inputs are in the correctly format', () => {
    const session = Session.create({ name: 'name', email: 'email@email.com', accessToken: 'token' })

    expect(session.isRight()).toBeTruthy()
    expect(session.isLeft()).toBeFalsy()
    expect(session.value).toBeInstanceOf(Session)
  })
})
