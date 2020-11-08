import { UserEntity } from './user.entity'

import { InvalidNameError, InvalidEmailError } from '../../../signup/business'

describe('User', () => {
  it('Should return isLeft = true and value is an instance of InvalidNameError if the name input is in the wrong format', () => {
    const user = UserEntity.create({ id: 1, name: 'na', email: 'email@email.com', password: 'passwordHash', createdAt: new Date(), updatedAt: new Date() })

    expect(user.isLeft()).toBeTruthy()
    expect(user.isRight()).toBeFalsy()
    expect(user.value).toBeInstanceOf(InvalidNameError)
  })

  it('Should return isLeft = true and value is an instance of InvalidEmailError if the email input is in the wrong format', () => {
    const user = UserEntity.create({ id: 1, name: 'name', email: 'email@email', password: 'passwordHash', createdAt: new Date(), updatedAt: new Date() })

    expect(user.isLeft()).toBeTruthy()
    expect(user.isRight()).toBeFalsy()
    expect(user.value).toBeInstanceOf(InvalidEmailError)
  })

  it('Should return isRight = true and User if the inputs are in the correctly format', () => {
    const password = UserEntity.create({ id: 1, name: 'name', email: 'email@email.com', password: 'passwordHash', createdAt: new Date(), updatedAt: new Date() })

    expect(password.isRight()).toBeTruthy()
    expect(password.isLeft()).toBeFalsy()
    expect(password.value).toBeInstanceOf(UserEntity)
  })
})
