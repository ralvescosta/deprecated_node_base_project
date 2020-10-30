import { InvalidPasswordError } from '../errors/invalid.password.error'
import { Either } from '../../../core/adapters/either'

export class Password {
  private readonly password: string;

  private constructor (password: string) {
    this.password = password
    Object.freeze(this)
  }

  public static create (password: string): Either<InvalidPasswordError, Password> {
    if (!Password.validate(password)) {
      return {
        left: new InvalidPasswordError(password),
        right: undefined
      }
    }
    return {
      left: undefined,
      right: new Password(password)
    }
  }

  get value (): string {
    return this.password
  }

  public static validate (password: string): boolean {
    if (!password || password.length < 6) {
      return false
    }
    return true
  }
}
