import InternalError from '../../../src/applications/erros/internal_error'

describe('InternalError', () => {
  beforeEach(() => jest.clearAllMocks())
  it('new', () => {
    const error = new InternalError('message')

    expect(error).toBeInstanceOf(Error)
    expect(error.message).toEqual('message')
    expect(error.name).toEqual('InternalError')
  })
})
