import { BaseError } from '../../../core/business'

export class AccessTokenNotProviderError extends Error implements BaseError {
  constructor (public message: string = '') {
    super(message)
    this.name = 'AccessTokenNotProviderError'
  }
}
