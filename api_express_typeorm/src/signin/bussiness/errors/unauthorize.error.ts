export class UnauthorizeError extends Error {
  constructor (public message: string = '') {
    super(message)
    this.name = 'UnauthorizeError'
  }
}
