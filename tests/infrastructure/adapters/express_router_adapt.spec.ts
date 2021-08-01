import RouteAdapt from '../../../src/infrastructure/adapters/express_router_adapt'
import Logger from '../../mocks/logger'

function makeSut ({ statusCode }) {
  const handler = jest.fn(async () => {
    return Promise.resolve({ statusCode, body: {}, headers: {} })
  })
  const logger = Logger()
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

  const sut = RouteAdapt(handler, logger)

  return {
    handler,
    logger,
    expressRequest,
    expressResponse,
    sut
  }
}

describe('ExpressRouterAdapt', () => {
  beforeEach(() => jest.clearAllMocks())
  it('RoutAdapt success', async () => {
    const { sut, logger, expressRequest, expressResponse } = makeSut({ statusCode: 201 })
    jest.spyOn(logger, 'info')

    await sut(expressRequest, expressResponse)

    expect(logger.info).toHaveBeenCalledTimes(2)
    expect(expressResponse.status).toHaveBeenCalledTimes(1)
  })

  it('RoutAdapt error', async () => {
    const { sut, logger, expressRequest, expressResponse } = makeSut({ statusCode: 404 })
    jest.spyOn(logger, 'info')
    jest.spyOn(logger, 'error')

    await sut(expressRequest, expressResponse)

    expect(logger.info).toHaveBeenCalledTimes(1)
    expect(logger.error).toHaveBeenCalledTimes(1)
    expect(expressResponse.status).toHaveBeenCalledTimes(1)
  })
})
