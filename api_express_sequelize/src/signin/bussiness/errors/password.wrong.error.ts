export class PasswordWrongError extends Error {
  constructor (public message: string = '') {
    super(message)
    this.name = 'PasswordWrongError'
  }
}
