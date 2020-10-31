import { BaseError } from '../../../core/business'

export class RepositoryError extends Error implements BaseError {
  constructor (public message: string = '') {
    super(message)
    this.name = 'RepositoryError'
  }
}
