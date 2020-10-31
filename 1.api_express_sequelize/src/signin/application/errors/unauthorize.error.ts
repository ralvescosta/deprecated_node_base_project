import { BaseError } from '../../../core/business'

export class UnauthorizeError extends Error implements BaseError {
  constructor (public message: string = '') {
    super(message)
    this.name = 'UnauthorizeError'
  }
}
