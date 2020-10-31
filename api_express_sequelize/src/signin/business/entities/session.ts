import { BaseError, Either, left, right } from '../../../core/business'
import { Email, Name } from '../../../signup/business'

import { SessionDTO } from './session.dto'

import { AccessTokenNotProviderError } from '../errors/access.token.not.provider.error'

export class Session {
  private constructor (
    public readonly name: Name,
    public readonly email: Email,
    public readonly accessToken: string
  ) {}

  public static create (props: SessionDTO): Either<BaseError, Session> {
    const name = Name.create(props.name)
    if (name.isLeft()) {
      return left(name.value)
    }

    const email = Email.create(props.email)
    if (email.isLeft()) {
      return left(email.value)
    }

    if (!props.accessToken) {
      return left(new AccessTokenNotProviderError())
    }

    return right(new Session(name.value as Name, email.value as Email, props.accessToken))
  }
}
