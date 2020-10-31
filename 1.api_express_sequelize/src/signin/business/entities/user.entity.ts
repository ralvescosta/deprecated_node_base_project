import { Either, left, right } from '../../../core/business'
import { Email, Name } from '../../../signup/business'

import { DateNotProviderError } from '../errors/date.not.provider'

export class UserEntity {
  private constructor (
    public readonly id: number,
    public readonly name: Name,
    public readonly email: Email,
    public readonly passwordHash: string,
    public readonly createdAt: Date,
    public readonly updatedAt: Date
  ) {
    Object.freeze(this)
  }

  public static create (params: any): Either<any, UserEntity> {
    const name = Name.create(params.name)
    if (name.isLeft()) {
      return left(name.value)
    }

    const email = Email.create(params.email)
    if (email.isLeft()) {
      return left(email.value)
    }

    if (!params.createdAt || !params.updatedAt) {
      return left(new DateNotProviderError())
    }
    const createdAt = new Date(params.createdAt)
    const updatedAt = new Date(params.updatedAt)

    return right(new UserEntity(params.id, name.value, email.value, params.password, createdAt, updatedAt))
  }
}
