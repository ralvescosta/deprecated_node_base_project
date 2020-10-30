import { Email } from './email'
import { Name } from './name'
import { Password } from './password'
import { UserDTO } from './user.dto'
import { Either, left, right, BaseError } from '../../../core/business'

export class User {
  private constructor (
    public readonly name: Name,
    public readonly email: Email,
    public readonly password?: Password
  ) {
    Object.freeze(this)
  }

  public static create (props: UserDTO): Either<BaseError, User> {
    const name = Name.create(props.name)
    if (name.isLeft()) {
      return left(name.value)
    }

    const email = Email.create(props.email)
    if (email.isLeft()) {
      return left(email.value)
    }

    const password = Password.create(props.password)
    if (password.isLeft()) {
      return left(password.value)
    }

    return right(new User(name.value as Name, email.value as Email, password.value as Password))
  }
}
