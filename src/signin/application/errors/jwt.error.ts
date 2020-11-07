import { BaseError } from '../../../core/business'

export class JwtError extends Error implements BaseError {
  constructor (public message: string = '') {
    super(message)
    this.name = 'JwtError'
  }
}
