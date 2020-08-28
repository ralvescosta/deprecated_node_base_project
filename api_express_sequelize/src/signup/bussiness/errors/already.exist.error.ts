export class AlreadyExistError extends Error {
  constructor (public message: string = '') {
    super(message)
    this.name = 'AlreadyExistError'
  }
}
