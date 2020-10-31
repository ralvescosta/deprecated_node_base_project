import { BaseError } from '../../../core/business'

export class AlreadyExistError extends Error implements BaseError {
  constructor (public message: string = '') {
    super(message)
    this.name = 'AlreadyExistError'
  }
}
