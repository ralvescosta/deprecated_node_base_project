import { BaseError } from '../../../core/business'

export class InvalidNameError extends Error implements BaseError {
  constructor (name: string) {
    super(`The name "${name}" is invalid.`)
    this.name = 'InvalidNameError'
  }
}
