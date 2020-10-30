import { Email } from './email'
import { Name } from './name'
import { Password } from './password'
import { UserEntity } from './user.entity'
import { Either } from '../../../core/adapters/either'

export class User {
  public readonly name: Name
  public readonly email: Email
  public readonly password: Password

  private constructor (name: Name, email: Email, password: Password) {
    this.name = name
    this.email = email
    this.password = password
    Object.freeze(this)
  }

  static create (props: UserEntity): Either<any, User> {
    const name = Name.create(props.name)
    if (name.left) {
      return {
        left: name.left,
        right: undefined
      }
    }

    const email = Email.create(props.email)
    if (email.left) {
      return {
        left: email.left,
        right: undefined
      }
    }

    const password = Password.create(props.password)
    if (password.left) {
      return {
        left: password.left,
        right: undefined
      }
    }

    return {
      left: undefined,
      right: new User(name.right as Name, email.right as Email, password.right as Password)
    }
  }
}
