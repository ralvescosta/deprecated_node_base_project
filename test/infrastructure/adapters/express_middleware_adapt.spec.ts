import MiddlewareAdapt from '../../../src/infrastructure/adapters/express_middleware_adapt'

function makeSut ({ statusCode }) {
  const middleware = {
    handler: jest.fn(async () => {
      return Promise.resolve({ statusCode, body: {}, headers: {}, auth: {} })
    })
  }
  const expressRequest = {
    body: {},
    headers: {},
    params: {},
    query: {},
    auth: {},
    method: '',
    path: ''
  } as any
  const expressResponse = {
    status: jest.fn(() => ({
      header: jest.fn(() => ({
        json: jest.fn()
      }))
    }))
  } as any
  const expressNext = jest.fn()

  const sut = MiddlewareAdapt(middleware)

  return {
    middleware,
    expressRequest,
    expressResponse,
    expressNext,
    sut
  }
}
describe('ExpressMiddlewareAdapt', () => {
  beforeEach(() => jest.clearAllMocks())
  it('MiddlewareAdapt success', async () => {
    const { sut, expressRequest, expressResponse, expressNext, middleware } = makeSut({ statusCode: 200 })

    await sut(expressRequest, expressResponse, expressNext)

    expect(expressNext).toHaveBeenCalledTimes(1)
    expect(middleware.handler).toHaveBeenCalledTimes(1)
  })

  it('MiddlewareAdapt failure', async () => {
    const { sut, expressRequest, expressResponse, expressNext, middleware } = makeSut({ statusCode: 401 })

    await sut(expressRequest, expressResponse, expressNext)

    expect(middleware.handler).toHaveBeenCalledTimes(1)
    expect(expressResponse.status).toHaveBeenCalledTimes(1)
  })

  it('MiddlewareAdapt auth', async () => {
    const { sut, expressRequest, expressResponse, expressNext, middleware } = makeSut({ statusCode: 299 })

    await sut(expressRequest, expressResponse, expressNext)

    expect(middleware.handler).toHaveBeenCalledTimes(1)
    expect(expressNext).toHaveBeenCalledTimes(1)
  })

  it('MiddlewareAdapt without auth', async () => {
    const { sut, expressRequest, expressResponse, expressNext, middleware } = makeSut({ statusCode: 299 })
    expressRequest.auth = undefined

    await sut(expressRequest, expressResponse, expressNext)

    expect(middleware.handler).toHaveBeenCalledTimes(1)
    expect(expressNext).toHaveBeenCalledTimes(1)
  })
})
