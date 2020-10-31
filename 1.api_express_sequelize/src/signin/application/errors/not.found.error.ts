import { BaseError } from '../../../core/business'

export class NotFoundError extends Error implements BaseError {
  constructor (public message: string = '') {
    super(message)
    this.name = 'NotFoundError'
  }
}
