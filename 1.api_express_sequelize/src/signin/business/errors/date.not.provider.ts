import { BaseError } from '../../../core/business'

export class DateNotProviderError extends Error implements BaseError {
  constructor (public message: string = '') {
    super(message)
    this.name = 'DateNotProviderError'
  }
}
