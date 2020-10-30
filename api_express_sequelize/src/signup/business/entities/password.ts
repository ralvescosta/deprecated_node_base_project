import { InvalidPasswordError } from '../errors/invalid.password.error'
import { Either, left, right } from '../../../core/business'

export class Password {
  private constructor (private readonly _password: string) {
    Object.freeze(this)
  }

  public static create (password: string): Either<InvalidPasswordError, Password> {
    if (!Password.validate(password)) {
      return left(new InvalidPasswordError(password))
    }
    return right(new Password(password))
  }

  get value (): string {
    return this._password
  }

  public static validate (password: string): boolean {
    if (!password || password.length < 6) {
      return false
    }
    return true
  }
}
