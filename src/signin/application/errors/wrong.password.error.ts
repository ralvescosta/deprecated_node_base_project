import { BaseError } from '../../../core/business'

export class WrongPasswordError extends Error implements BaseError {
  constructor (public message: string = '') {
    super(message)
    this.name = 'WrongPasswordError'
  }
}
