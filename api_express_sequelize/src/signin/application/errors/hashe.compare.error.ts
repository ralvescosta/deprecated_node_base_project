import { BaseError } from '../../../core/business'

export class HasheCompareError extends Error implements BaseError {
  constructor (public message: string = '') {
    super(message)
    this.name = 'HasheCompareError'
  }
}
