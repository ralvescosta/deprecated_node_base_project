import { BaseError } from '../../../core/business'

export class InvalidPasswordError extends Error implements BaseError {
  constructor (password: string) {
    super(`The password "${password}" is invalid.`)
    this.name = 'InvalidPasswordError'
  }
}
