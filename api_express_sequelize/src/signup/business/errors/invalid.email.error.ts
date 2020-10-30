import { BaseError } from '../../../core/business'

export class InvalidEmailError extends Error implements BaseError {
  constructor (email: string) {
    super(`The email "${email}" is invalid.`)
    this.name = 'InvalidEmailError'
  }
}
