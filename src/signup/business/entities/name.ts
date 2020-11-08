import { InvalidNameError } from '../errors/invalid.name.error'
import { Either, left, right } from '../../../core/business'

export class Name {
  private constructor (private readonly _name: string) {
    Object.freeze(this)
  }

  public static create (name: string): Either<InvalidNameError, Name> {
    if (!Name.validate(name)) {
      return left(new InvalidNameError(name))
    }
    return right(new Name(name))
  }

  get value (): string {
    return this._name
  }

  public static validate (name: string): boolean {
    if (!name || name.length < 3 || name.length > 255) {
      return false
    }
    return true
  }
}
