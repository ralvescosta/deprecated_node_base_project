import { InvalidNameError } from '../errors/invalid.name.error'
import { Either } from '../../../core/adapters/either'

export class Name {
  private readonly name: string;

  private constructor (name: string) {
    this.name = name
    Object.freeze(this)
  }

  public static create (name: string): Either<InvalidNameError, Name> {
    if (!Name.validate(name)) {
      return {
        left: new InvalidNameError(name),
        right: undefined
      }
    }
    return {
      left: undefined,
      right: new Name(name)
    }
  }

  get value (): string {
    return this.name
  }

  public static validate (name: string): boolean {
    if (!name || name.length < 2 || name.length > 255) {
      return false
    }
    return true
  }
}
