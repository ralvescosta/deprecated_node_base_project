import { BaseError } from '../../../core/business'

export class HasherError extends Error implements BaseError {
  constructor (public message: string = '') {
    super(message)
    this.name = 'HasherError'
  }
}
